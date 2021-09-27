const progress = document.querySelectorAll('.progress-range');

for (var progressItem of progress) {
  progressItem.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
  })
}

/*==================== MENU SHOW AND HIDDEN ====================*/
const mainMenu = document.querySelector('.main-menu'),
      navToggle = document.getElementById('nav-toggle')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainMenu.classList.add('show-menu') 
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists 
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}*/

/*==================== MODAL ====================*/

const modalView = document.querySelector('.tickets-modal__container'),
      modalBtn = document.querySelector('.tickets-section__button'),
      modalClose = document.querySelector('.tickets-modal__close'),
      modalOverlay = document.querySelector('.overlay')


modalBtn.addEventListener('click', () => {
  modalView.classList.add('active-modal')
  modalOverlay.classList.add('active-overlay')
})


modalClose.addEventListener('click', () => {
    modalView.classList.remove('active-modal')
    modalOverlay.classList.remove('active-overlay')
})


modalOverlay.addEventListener(('click'), () => {
  modalView.classList.remove('active-modal')
  modalOverlay.classList.remove('active-overlay')
})

/*==================== EXPLORE SLIDER ====================*/

function initComparisons() {
  var x, i;
  x = document.getElementsByClassName("img-comp-overlay");
  var slider = document.querySelector(".img-comp-slider");

  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    var img, clicked = 0, w, h;
    w = img.offsetWidth;
    h = img.offsetHeight;

    img.style.width = (w / 2) + 50  + "px";

    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + 50 + "px";

    slider.addEventListener("mousedown", slideReady);
    window.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    window.addEventListener("touchend", slideFinish);

    function slideReady(e) {
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      if (clicked == 0) return false;

      pos = getCursorPos(e)
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

document.onload = initComparisons();

/*==================== SWIPER ====================*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 41,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 
