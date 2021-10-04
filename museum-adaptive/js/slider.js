var slide = 0,
    welcomeSlider = document.querySelector('.welcome-section__slider'),
    welcomeSliderBullets = document.querySelector('.welcome-section__slider-bullets'),
    slides = [],
    numSlides = 5,

    //Functions!!
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
    currentSlide = function() {
      const slideWidth = slides.clientWidth
      const offset = -slide * slideWidth
      
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
/*document.querySelector('#first').addEventListener('click', function() {
    slide = 0;
    currentSlide();
}, false);
document.querySelector('#second').addEventListener('click', function() {
    slide = 1;
    currentSlide();
}, false);
document.querySelector('#third').addEventListener('click', function() {
    slide = 2;
    currentSlide();
}, false);
document.querySelector('#fourth').addEventListener('click', function() {
    slide = 3;
    currentSlide();
}, false);
document.querySelector('#fifth').addEventListener('click', function() {
    slide = 4;
    currentSlide();
}, false);
document.querySelector('#sixth').addEventListener('click', function() {
    slide = 5;
    currentSlide();
}, false);*/
document.querySelector('.welcome-section__right-arrow').addEventListener('click', function() {
    next();
}, false);
document.querySelector('.welcome-section__left-arrow').addEventListener('click', function() {
    prev();
}, false);