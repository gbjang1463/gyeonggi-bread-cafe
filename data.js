/**
 * 경기도 빵카페 데이터
 *
 * 샘플 데이터입니다. 실제 운영 정보는 각 카페에 확인 후 업데이트하세요.
 * image 필드는 images/ 폴더의 대표 빵 사진을 가리킵니다.
 */
const CAFES = [
  {
    name: "밀밭 베이커리",
    region: "수원시",
    address: "경기 수원시 영통구 광교중앙로 145",
    hours: "매일 09:00 ~ 22:00",
    rating: 4.7,
    badge: "BEST",
    emoji: "🥖",
    image: "images/milbat.jpg",
    menu: ["통밀 캄파뉴", "에그타르트", "크루아상"],
    note: "광교호수공원 근처, 통밀빵으로 유명"
  },
  {
    name: "오븐속 작은빵집",
    region: "성남시",
    address: "경기 성남시 분당구 정자일로 95",
    hours: "화~일 10:00 ~ 21:00 (월 휴무)",
    rating: 4.5,
    emoji: "🍞",
    image: "images/ovenside.jpg",
    menu: ["식빵", "소금빵", "치아바타"],
    note: "정자동 카페거리 골목 안쪽"
  },
  {
    name: "버터하우스",
    region: "성남시",
    address: "경기 성남시 분당구 판교역로 235",
    hours: "매일 08:00 ~ 22:00",
    rating: 4.6,
    badge: "NEW",
    emoji: "🧈",
    image: "images/butterhouse.jpg",
    menu: ["크로플", "버터바", "휘낭시에"],
    note: "판교 알파돔시티, 휘낭시에가 시그니처"
  },
  {
    name: "달콤한 오후",
    region: "용인시",
    address: "경기 용인시 수지구 죽전로 152",
    hours: "수~월 11:00 ~ 21:00 (화 휴무)",
    rating: 4.4,
    emoji: "🥐",
    image: "images/sweet-afternoon.jpg",
    menu: ["크림빵", "단팥빵", "땅콩크림"],
    note: "옛날 추억의 단팥빵 전문"
  },
  {
    name: "프렌치 코너",
    region: "고양시",
    address: "경기 고양시 일산동구 호수로 596",
    hours: "매일 09:30 ~ 22:00",
    rating: 4.6,
    emoji: "🥐",
    image: "images/french-corner.jpg",
    menu: ["크루아상", "팽오쇼콜라", "브리오슈"],
    note: "일산호수공원 바로 옆 프랑스식 빵집"
  },
  {
    name: "노릇노릇",
    region: "안양시",
    address: "경기 안양시 동안구 평촌대로 145",
    hours: "월~토 08:00 ~ 21:00 (일 휴무)",
    rating: 4.3,
    emoji: "🍞",
    image: "images/noreutnoreut.jpg",
    menu: ["우유식빵", "감자빵", "옥수수빵"],
    note: "평촌학원가 직장인 단골집"
  },
  {
    name: "오월의 빵",
    region: "광명시",
    address: "경기 광명시 오리로 854",
    hours: "화~일 10:00 ~ 20:00 (월 휴무)",
    rating: 4.8,
    badge: "BEST",
    emoji: "🌾",
    image: "images/may-bread.jpg",
    menu: ["호밀빵", "캄파뉴", "통밀바게트"],
    note: "천연발효 호밀빵 명가"
  },
  {
    name: "베이크 스튜디오",
    region: "안산시",
    address: "경기 안산시 단원구 광덕대로 178",
    hours: "매일 10:00 ~ 22:00",
    rating: 4.2,
    emoji: "🧁",
    image: "images/bake-studio.jpg",
    menu: ["스콘", "마들렌", "파운드케이크"],
    note: "디저트와 커피가 함께 좋은 곳"
  },
  {
    name: "할머니 빵집",
    region: "의왕시",
    address: "경기 의왕시 오전로 35",
    hours: "월~토 07:00 ~ 19:00 (일 휴무)",
    rating: 4.5,
    emoji: "🥯",
    image: "images/grandma.jpg",
    menu: ["찹쌀도넛", "꽈배기", "단팥도넛"],
    note: "40년 전통 옛날 도넛, 오전부터 줄 섭니다"
  },
  {
    name: "바게트 책방",
    region: "파주시",
    address: "경기 파주시 회동길 145 (헤이리)",
    hours: "수~일 11:00 ~ 19:00 (월·화 휴무)",
    rating: 4.7,
    emoji: "📚",
    image: "images/baguette-books.jpg",
    menu: ["바게트", "치아바타", "리스띠끄"],
    note: "헤이리예술마을 책방 겸 빵집"
  },
  {
    name: "햇살 베이커리",
    region: "남양주시",
    address: "경기 남양주시 다산중앙로 82",
    hours: "매일 09:00 ~ 22:00",
    rating: 4.3,
    emoji: "☀️",
    image: "images/sunlight.jpg",
    menu: ["소금빵", "마늘바게트", "올리브치아바타"],
    note: "다산신도시, 소금빵 입소문"
  },
  {
    name: "동네 빵공장",
    region: "부천시",
    address: "경기 부천시 원미구 부일로 365",
    hours: "화~일 09:00 ~ 21:00 (월 휴무)",
    rating: 4.4,
    emoji: "🏭",
    image: "images/village-factory.jpg",
    menu: ["식빵", "모카번", "베이글"],
    note: "매일 새벽 직접 반죽, 베이글 인기"
  },
  {
    name: "초승달 베이커리",
    region: "화성시",
    address: "경기 화성시 동탄대로 587",
    hours: "매일 10:00 ~ 22:00",
    rating: 4.5,
    badge: "NEW",
    emoji: "🌙",
    image: "images/crescent.jpg",
    menu: ["크루아상", "프레첼", "데니쉬"],
    note: "동탄2 신도시 인기 신생 베이커리"
  },
  {
    name: "보리수 빵집",
    region: "평택시",
    address: "경기 평택시 평남로 1063",
    hours: "월~토 08:00 ~ 20:00 (일 휴무)",
    rating: 4.2,
    emoji: "🌳",
    image: "images/bori-tree.jpg",
    menu: ["보리빵", "흑미식빵", "잡곡스콘"],
    note: "잡곡 위주 건강빵 전문"
  },
  {
    name: "치즈룸",
    region: "김포시",
    address: "경기 김포시 김포한강9로 76",
    hours: "수~월 10:00 ~ 21:00 (화 휴무)",
    rating: 4.6,
    emoji: "🧀",
    image: "images/cheeseroom.jpg",
    menu: ["치즈볼", "고르곤졸라 포카치아", "치즈케이크"],
    note: "치즈 듬뿍 빵 전문점"
  },
  {
    name: "강가의 빵카페",
    region: "양평군",
    address: "경기 양평군 양서면 양수로 117",
    hours: "수~월 10:00 ~ 19:00 (화 휴무)",
    rating: 4.8,
    badge: "BEST",
    emoji: "🏞️",
    image: "images/riverside.jpg",
    menu: ["통밀 사워도", "캄파뉴", "허브 포카치아"],
    note: "두물머리 강뷰, 드라이브 코스"
  },
  {
    name: "구운 마음",
    region: "이천시",
    address: "경기 이천시 부발읍 경충대로 2078",
    hours: "매일 09:00 ~ 20:00",
    rating: 4.3,
    emoji: "❤️",
    image: "images/baked-heart.jpg",
    menu: ["쌀빵", "쌀카스테라", "쌀도넛"],
    note: "이천 햅쌀로 만든 쌀빵 전문"
  },
  {
    name: "포레스트 베이커리",
    region: "가평군",
    address: "경기 가평군 청평면 호반로 1374",
    hours: "금~일 11:00 ~ 18:00 (평일 휴무)",
    rating: 4.7,
    emoji: "🌲",
    image: "images/forest.jpg",
    menu: ["통밀 깜빠뉴", "호두 무화과", "잣 스콘"],
    note: "주말 한정 운영, 청평호 근처 숲속 카페"
  },
  {
    name: "단단한 빵",
    region: "오산시",
    address: "경기 오산시 경기대로 244",
    hours: "월~토 09:00 ~ 21:00 (일 휴무)",
    rating: 4.4,
    emoji: "💪",
    image: "images/firm-bread.jpg",
    menu: ["하드 사워도", "호밀 바게트", "씨앗 식빵"],
    note: "단단한 식감의 유럽식 빵 전문"
  },
  {
    name: "구름빵",
    region: "하남시",
    address: "경기 하남시 미사강변중앙로 200",
    hours: "매일 09:00 ~ 22:00",
    rating: 4.5,
    emoji: "☁️",
    image: "images/cloud-bread.jpg",
    menu: ["우유 생크림빵", "솜사탕 식빵", "휘낭시에"],
    note: "미사역 근처, 생크림빵으로 유명"
  },
  {
    name: "고소한 아침",
    region: "광주시",
    address: "경기 광주시 경충대로 1438",
    hours: "화~일 08:00 ~ 19:00 (월 휴무)",
    rating: 4.3,
    emoji: "🌅",
    image: "images/savory-morning.jpg",
    menu: ["우유식빵", "땅콩크림빵", "고구마빵"],
    note: "주말 브런치 메뉴도 운영"
  },
  {
    name: "베이커스 골목",
    region: "시흥시",
    address: "경기 시흥시 정왕대로 28",
    hours: "매일 10:00 ~ 21:00",
    rating: 4.2,
    emoji: "🛍️",
    image: "images/bakers-alley.jpg",
    menu: ["크림치즈베이글", "프레첼", "치아바타 샌드위치"],
    note: "베이글 샌드위치 인기"
  },
  {
    name: "햇귀리 베이커리",
    region: "여주시",
    address: "경기 여주시 세종로 1",
    hours: "수~일 10:00 ~ 19:00 (월·화 휴무)",
    rating: 4.6,
    emoji: "🌾",
    image: "images/oat-bakery.jpg",
    menu: ["귀리식빵", "통밀 깜빠뉴", "호두빵"],
    note: "여주 한글시장 근처 건강빵 전문"
  },
  {
    name: "별이 빵집",
    region: "포천시",
    address: "경기 포천시 소흘읍 죽엽산로 167",
    hours: "금~일 10:00 ~ 18:00",
    rating: 4.5,
    emoji: "⭐",
    image: "images/star-bakery.jpg",
    menu: ["천연발효 캄파뉴", "허브 치아바타", "잣 휘낭시에"],
    note: "주말 한정, 산속 작은 빵집"
  }
];
