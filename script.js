(function () {
  'use strict';

  const state = {
    region: 'ALL',
    query: '',
    sort: 'recommend'
  };

  const grid = document.getElementById('cafeGrid');
  const emptyState = document.getElementById('emptyState');
  const resultCount = document.getElementById('resultCount');
  const heroStats = document.getElementById('heroStats');
  const regionChips = document.getElementById('regionChips');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');
  const resetBtn = document.getElementById('resetBtn');

  function uniqueRegions() {
    const set = new Set(CAFES.map((c) => c.region));
    return Array.from(set).sort((a, b) => a.localeCompare(b, 'ko'));
  }

  function renderHeroStats() {
    const regionCount = uniqueRegions().length;
    const avgRating = (
      CAFES.reduce((sum, c) => sum + (c.rating || 0), 0) / CAFES.length
    ).toFixed(1);

    heroStats.innerHTML = `
      <span class="hero__stat"><strong>${CAFES.length}</strong> 빵카페</span>
      <span class="hero__stat"><strong>${regionCount}</strong> 시·군</span>
      <span class="hero__stat"><strong>★ ${avgRating}</strong> 평균 평점</span>
    `;
  }

  function renderRegionChips() {
    const regions = uniqueRegions();
    const buttons = [
      `<button type="button" class="chip ${state.region === 'ALL' ? 'active' : ''}" data-region="ALL">전체</button>`,
      ...regions.map(
        (r) => `<button type="button" class="chip ${state.region === r ? 'active' : ''}" data-region="${r}">${r}</button>`
      )
    ];
    regionChips.innerHTML = buttons.join('');
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function filterCafes() {
    const q = state.query.trim().toLowerCase();
    return CAFES.filter((c) => {
      if (state.region !== 'ALL' && c.region !== state.region) return false;
      if (!q) return true;
      const haystack = [
        c.name,
        c.region,
        c.address,
        c.note,
        ...(c.menu || [])
      ].join(' ').toLowerCase();
      return haystack.includes(q);
    });
  }

  function sortCafes(list) {
    const arr = list.slice();
    switch (state.sort) {
      case 'name':
        arr.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        break;
      case 'rating':
        arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'region':
        arr.sort((a, b) => a.region.localeCompare(b.region, 'ko') || a.name.localeCompare(b.name, 'ko'));
        break;
      case 'recommend':
      default:
        arr.sort((a, b) => {
          const aw = (a.badge === 'BEST' ? 2 : a.badge === 'NEW' ? 1 : 0);
          const bw = (b.badge === 'BEST' ? 2 : b.badge === 'NEW' ? 1 : 0);
          if (bw !== aw) return bw - aw;
          return (b.rating || 0) - (a.rating || 0);
        });
        break;
    }
    return arr;
  }

  function cardHTML(cafe) {
    const mapUrl = `https://map.kakao.com/?q=${encodeURIComponent(cafe.name + ' ' + cafe.address)}`;
    const searchUrl = `https://search.naver.com/search.naver?query=${encodeURIComponent(cafe.name + ' ' + cafe.region)}`;
    const badge = cafe.badge ? `<span class="card__badge">${escapeHTML(cafe.badge)}</span>` : '';
    const rating = cafe.rating ? `<span class="card__rating">★ ${cafe.rating.toFixed(1)}</span>` : '';
    const menu = (cafe.menu || [])
      .slice(0, 3)
      .map((m) => `<span class="menu-tag">${escapeHTML(m)}</span>`)
      .join('');

    return `
      <article class="card">
        <div class="card__cover">
          ${badge}
          ${rating}
          <span aria-hidden="true">${escapeHTML(cafe.emoji || '🍞')}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${escapeHTML(cafe.name)}</h3>
          <p class="card__region">${escapeHTML(cafe.region)} · ${escapeHTML(cafe.note || '')}</p>
          <p class="card__address">${escapeHTML(cafe.address)}</p>
          <p class="card__hours">${escapeHTML(cafe.hours)}</p>
          <div class="card__menu">${menu}</div>
          <div class="card__footer">
            <a class="card__link card__link--map" href="${mapUrl}" target="_blank" rel="noopener noreferrer">카카오맵 보기</a>
            <a class="card__link card__link--search" href="${searchUrl}" target="_blank" rel="noopener noreferrer">검색</a>
          </div>
        </div>
      </article>
    `;
  }

  function render() {
    const filtered = sortCafes(filterCafes());
    grid.innerHTML = filtered.map(cardHTML).join('');

    if (filtered.length === 0) {
      grid.hidden = true;
      emptyState.hidden = false;
    } else {
      grid.hidden = false;
      emptyState.hidden = true;
    }

    const total = CAFES.length;
    const shown = filtered.length;
    resultCount.innerHTML =
      shown === total
        ? `전체 <strong>${total}</strong>곳의 빵카페`
        : `<strong>${shown}</strong>곳 · 전체 ${total}곳 중`;
  }

  function bindEvents() {
    regionChips.addEventListener('click', (e) => {
      const target = e.target.closest('.chip');
      if (!target) return;
      state.region = target.dataset.region;
      renderRegionChips();
      render();
    });

    let searchTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimer);
      const value = e.target.value;
      searchTimer = setTimeout(() => {
        state.query = value;
        render();
      }, 120);
    });

    sortSelect.addEventListener('change', (e) => {
      state.sort = e.target.value;
      render();
    });

    resetBtn.addEventListener('click', () => {
      state.region = 'ALL';
      state.query = '';
      state.sort = 'recommend';
      searchInput.value = '';
      sortSelect.value = 'recommend';
      renderRegionChips();
      render();
    });
  }

  renderHeroStats();
  renderRegionChips();
  bindEvents();
  render();
})();
