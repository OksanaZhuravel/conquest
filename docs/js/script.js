// Проверка поддержки web формата картинок
function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
// Открытие, закрытие мобильного меню
let navMain = document.querySelector('.nav'),
  navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
// переключение активных ссылок в меню
let navClick = document
  .querySelectorAll('.nav__link')
  .forEach(function (navClick) {
    navClick.addEventListener('click', function () {
      if (navClick.classList.contains('nav__link--active')) {
        navClick.classList.remove('nav__link--active');
      } else {
        navClick.classList.add('nav__link--active');
        console.log(navClick.classList);
      }
    });
  });

// Сертификаты слайдер
new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 3,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
    },
    1068: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 40,
    },
  },
  centerSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        ' / <span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

//  Проекты слайдер

new Swiper('.project', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 5,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    1068: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
  },
  centerSlides: true,
  loop: true,
  loopFillGroupWithBlank: false,
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        ' / <span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

// Модальное окно
let modal = document.querySelector('.modal');
let close = modal.querySelector('.modal__close');
let show = modal.querySelectorAll('.modal__list').forEach(function (show) {
  if (show.attributes.lang.nodeValue === 'en') {
    show.classList.add('modal__list--show');
  } else {
    show.classList.add('modal__list--show');
  }
});
let button = document
  .querySelectorAll('.skill__link')
  .forEach(function (button) {
    button.addEventListener('click', function (evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    });
  });
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
});
window.addEventListener('keydown', function (e) {
  if (e.code === 'Escape' || 'NumpadEnter') {
    e.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
  }
});

// // переключение при смене языка
let langDocum = document.documentElement;
let navlang = document
  .querySelectorAll('.lang-list__link')
  .forEach(function (navlang) {
    navlang.addEventListener('click', function (lahg) {
      lahg.preventDefault();
      if (navlang.attributes[2].value === 'en') {
        langDocum.attributes.lang.value = 'en';
        if (navlang.classList.contains('lang-list__link--active')) {
          navlang.classList.remove('lang-list__link--active');
        } else {
          navlang.classList.add('lang-list__link--active');
        }
      } else {
        langDocum.attributes.lang.value = 'ru';
        if (navlang.classList.contains('lang-list__link--active')) {
          navlang.classList.remove('lang-list__active');
          navlang.classList.remove('lang-list__link--active');
        } else {
          navlang.classList.add('lang-list__link--active');
        }
      }
    });
  });
