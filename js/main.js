new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
});