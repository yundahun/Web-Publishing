// 공지사항 수직 슬라이드 기능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소, 옵션: {});
// 첫번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지 참고)
new Swiper('.notice .swiper', {
    // Optional parameters
    direction: 'vertical', // 수직 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: true // 자동 재생 여부
});

  //프로모션 수평슬라이드 기능
new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal', // 수평 슬라이드
    loop: true, // 반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜(기본값: 3000)
    },
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수(기본값: 1)
    spaceBetween: 10, // 슬라이드 사이 여백(간격) px
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지네이션 사용
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지네이션 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
    },
});

  // 프로모션 섹션 토글 기능
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
const promotionToggleIcon = promotionToggleBtn.querySelector('.material-icons');

  // Quiz
  // 토글 버튼을 클릭했을 때 아래 기능을 실행
  // 프로모션 요소에 'hide'라는 클래스 값이 있으면 보임 처리!('hide' 클래스를 제거하고 아이콘 모양을 'upload'로 설정)
  // 그렇지 않으면 숨김 처리!('hide' 클래스를 추가하고 아이콘 모양을 'download'로 설정)
promotionToggleBtn.addEventListener('click', function () {
    if (promotionEl.classList.contains('hide')) {
promotionEl.classList.remove('hide')
promotionToggleIcon.textContent = 'upload';
    } else {
promotionEl.classList.add('hide');
promotionToggleIcon.textContent = 'download';
    }
});