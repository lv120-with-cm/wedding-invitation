const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "박구삼 ❤️ 윤채민의 결혼식 알림장!",
    description: "결혼식 알림장",
    ogImage: "/images/20250925_132032.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 오픈 예약
  reserved: {
    enabled: false, // 오픈 예약 섹션 표시 여부
    openDate: new Date("2025-10-20T00:00:00"), // 오픈 날짜 및 시간 설정 (예: 2025년 10월 1일 자정)
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/20250925_132032.jpg",
    date: "2025년 11월 29일 토요일 11시 30분",
    venue: "효종당"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2025,
    month: 11,
    day: 29,
    hour: 11,
    minute: 30,
    displayDate: "2025.11.29 SAT AM 11:30",
  },

  // 장소 정보
  venue: {
    name: "효종당",
    address: "경기 용인시 기흥구 동백8로113번길 64\n효종당",
    tel: "N/A",
    naverMapId: "효종당", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.286961,
      longitude: 127.168179,
    },
    placeId: "36123471", // 네이버 지도 장소 ID
    mapZoom: "17", // 지도 줌 레벨
    mapNaverCoordinates: "14.89,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "",
      bus: "백현초등학교 하차 (도보10분)\n810, 101, 390번 버스, 수원버스 66-4번",
    },
    parking: "건물 앞 주차 가능(무료)",
    // 신랑측 배차 안내
    // groomShuttle: {
    //   location: "신랑측 배차 출발지",
    //   departureTime: "오전 10시 30분 출발",
    //   contact: {
    //     name: "담당자명",
    //     tel: "010-1234-5678"
    //   }
    // },
    // 신부측 배차 안내
    // brideShuttle: {
    //   location: "신부측 배차 출발지",
    //   departureTime: "오전 11시 출발",
    //   contact: {
    //     name: "담당자명",
    //     tel: "010-9876-5432"
    //   }
    //}
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "박구삼",
      label: "아들",
      father: "박재횐",
      mother: "손수정",
    },
    bride: {
      name: "윤채민",
      label: "딸",
      father: "윤태운",
      mother: "한예진",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "은행명",
      number: "123-456-789012",
      holder: "신랑이름",
    },
    bride: {
      bank: "은행명",
      number: "987-654-321098",
      holder: "신부이름",
    },
    groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "신랑아버지",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "신랑어머니",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "신부아버지",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "신부어머니",
    }
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
};
