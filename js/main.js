new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
});

new Swiper('.main-coffee .d-coffee .swiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: {
    delay: 3000
    },
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,

  navigation: { // 슬라이드 이전/다음 버튼 사용
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

const burgerEl = document.querySelector('.btn-hamburger');
const closeEl = document.querySelector('.btn-close')
const navEl = document.querySelector('.m-nav')

burgerEl.addEventListener('click', function () {
    navEl.classList.add('active')
})
closeEl.addEventListener('click', function () {
    navEl.classList.remove('active')
})

new Swiper('.md-coffee .swiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: { // 자동 재생 여부
      delay: 3000 // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
});