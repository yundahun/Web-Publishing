var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
});