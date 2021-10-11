var slide = 0,
    welcomeSlider = document.querySelector('.welcome-section__slider-imgs'),
    welcomeSliderBullets = document.querySelector('.welcome-section__slider-bullets'),
    numOfSlide = document.querySelector('.welcome-section__slide-num'),
    slides = [],
    numSlides = 5,

    loadSlides = () => {
      for (let el = numSlides; el > 0; el--) {
        let img = document.createElement('div');
        let bullet = document.createElement('div');
        img.classList.add('welcome-section__img');
        bullet.classList.add('welcome-section__slider-bullet');
        img.style.background = `var(--dark-grad), url(./assets/img/welcome-slider/${el}.jpg) no-repeat`;
        welcomeSlider.prepend(img);
        slides.push(img);

        if (el == numSlides) {
          bullet.classList.add('welcome-section__slide-active');
        }
        welcomeSliderBullets.append(bullet);
      }
    }

    const bulletArr = welcomeSliderBullets.children;

    currentSlide = function() {
      const slideWidth = welcomeSlider.offsetWidth;
      const offset = -slide * slideWidth;
      let activeBullet = document.querySelector('.welcome-section__slide-active');

      activeBullet.classList.remove('welcome-section__slide-active');
      bulletArr[slide].classList.add('welcome-section__slide-active');
      numOfSlide.innerText = `0${slide + 1} | 05`;

      welcomeSlider.style.transform = `translate(${offset}px)`;
    },
    next = function() {
      slide++;
      if (slide >= numSlides) slide = 0;
      currentSlide();
    },
    prev = function() {
      slide--;
      if (slide < 0) slide = numSlides - 1;
      currentSlide();
    };

//Buttons
loadSlides();
for (let i = 0; i < bulletArr.length; i++) {
  bulletArr[i].addEventListener('click', function() {
    slide = i;
    currentSlide();
  }, false);
}

document.querySelector('.welcome-section__right-arrow').addEventListener('click', function() {
    next();
}, false);
document.querySelector('.welcome-section__left-arrow').addEventListener('click', function() {
    prev();
}, false);

let isDragging = false,
startPos = 0,
currentTranslate = 0,
prevTranslate = 0

slides.forEach((slide, index) => {
  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

function touchStart(index) {
  return function (event) {
    startPos = getPositionX(event)
    isDragging = true
    welcomeSlider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100) next();
  if (movedBy > 100) prev();
  welcomeSlider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
