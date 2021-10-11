/*==================== MENU SHOW AND HIDDEN ====================*/
const mainMenu = document.querySelector('.nav-container'),
      navToggle = document.getElementById('nav-toggle'),
      section = document.getElementById('welcome'),
      textBehind = document.querySelector('.welcome-section__text');
let opened = false;

function closeMenu() {
  mainMenu.classList.remove('show-menu');
  navToggle.style.backgroundImage = `url(./assets/svg/burger.svg)`;
  textBehind.style.display = `block`;
  opened = false;
}

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (!opened) {
      mainMenu.classList.add('show-menu');
      navToggle.style.backgroundImage = `url(./assets/svg/close.svg)`;
      textBehind.style.display = `none`;
      opened = true;
    } else {
      closeMenu();
    }
  })
}

if (section) {
  section.addEventListener('click', () => {
    closeMenu();
  })
}

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
  var imgBefore = document.getElementById("explore-section__img-before");
  var x = document.getElementsByClassName("img-comp-overlay");
  var slider = document.querySelector(".img-comp-slider");

  for (i = 0; i < x.length; i++) {
    compareImages(x[i]);
  }

  function compareImages(img) {
    var img, clicked = 0, w, h;
    w = imgBefore.offsetWidth;
    h = img.offsetHeight;

    slider.addEventListener("mousedown", slideReady);
    slider.addEventListener("mouseup", slideFinish);
    slider.addEventListener("touchstart", slideReady);
    slider.addEventListener("touchend", slideFinish);

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
      //x = x - slider.pageXOffset;
      return x;
    }
    function slide(x) {
      img.style.width = x + "px";
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}

initComparisons();

/*==================== SCROLL REVEAL ====================*/
document.addEventListener("DOMContentLoaded", function () {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
  };

  let revealCallback = (entries) => {
    entries.forEach((entry) => {
      let container = entry.target;

      if (entry.isIntersecting) {
        container.classList.add("fade-up");
        return;
      }

      if (entry.boundingClientRect.top > 0) {
        container.classList.remove("fade-up");
      }
    });
  };

  let revealObserver = new IntersectionObserver(revealCallback, options);

  document.querySelectorAll(".gallery__img").forEach((reveal) => {
    revealObserver.observe(reveal);
  });

});

/*==================== VIDEO ====================*/
const player = document.querySelector('.video-section__player');
const video = document.querySelector('video');
const progressRangeVideo = document.querySelector('.progress-range__video');
const progressRangeVolume = document.querySelector('.progress-range__volume');
const playBtn = document.querySelector('.control-play');
const bigPlayBtn = document.querySelector('.control-big-play');
const volumeBtn = document.querySelector('.control-volume');
const fullscreenBtn = document.querySelector('.control-resize');

//Play & Pause
function showPlayIcon() {
  bigPlayBtn.style.display = 'block';
  playBtn.classList.replace('control-pause', 'control-play');
  playBtn.setAttribute('title', 'Play');
}

function togglePlay() {
  if (video.paused) {
    video.play();
    bigPlayBtn.style.display = 'none';
    playBtn.classList.replace('control-play', 'control-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    video.pause();
    showPlayIcon();
  }
}

video.addEventListener('ended', showPlayIcon);

//Progress Bar
const progress = document.querySelectorAll('.progress-range');

for (var progressItem of progress) {
  progressItem.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
  })
}

function changeRangeValue(range, value) {
  range.value = value;
  range.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
}

function updateProgress() {
  let value = (video.currentTime / video.duration) * 100;
  changeRangeValue(progressRangeVideo, value);
}

function setProgress(e) {
  const newTime = (e.offsetX / progressRangeVideo.offsetWidth) * 100;
  changeRangeValue(progressRangeVideo, newTime);
  video.currentTime = newTime * video.duration / 100;
}

//Volume Controls
let lastVolume = 1;

function changeVolume(e) {
  let volume = e.offsetX / progressRangeVolume.offsetWidth * 100;
  // Rounding value up or down
  if (volume < 10) {
    volume = 0;
    volumeBtn.classList.replace('control-volume', 'control-volume-none');
  } else {
    volumeBtn.classList.replace('control-volume-none', 'control-volume');
  }
  changeRangeValue(progressRangeVolume, volume);
  video.volume = volume / 100;
  lastVolume = video.volume;
}

function toggleVolumeBtn() {
  if (video.volume) {
    lastVolume = video.volume;
    changeRangeValue(progressRangeVolume, video.volume = 0);
    volumeBtn.classList.replace('control-volume', 'control-volume-none');
  } else {
    video.volume = lastVolume;
    changeRangeValue(progressRangeVolume, lastVolume * 100);
    volumeBtn.classList.replace('control-volume-none', 'control-volume');
  }
}

// Fullscreen

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  player.classList.add('player-fullscreen');
  video.classList.add('video-fullscreen');
  fullscreenBtn.classList.replace('control-resize', 'control-resize-exit');
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
  player.classList.remove('player-fullscreen');
  video.classList.remove('video-fullscreen');
  fullscreenBtn.classList.replace('control-resize-exit', 'control-resize');
}

let fullscreen = false;

function toggleFullscreen() {
  if (!fullscreen) {
    openFullscreen(player);
  } else {
    closeFullscreen();
  }
  fullscreen = !fullscreen;
}

function keyPress(event) {
  if (event.keyCode == 32){
    togglePlay();
    event.preventDefault();
  }
  if (event.code == 'KeyM'){
    toggleVolumeBtn();
  }
  if (event.code == 'KeyF'){
    toggleFullscreen();
  } 
}

//Event Listeners
bigPlayBtn.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRangeVideo.addEventListener('click', setProgress);
progressRangeVolume.addEventListener('click', changeVolume);
volumeBtn.addEventListener('click', toggleVolumeBtn);
fullscreenBtn.addEventListener('click', toggleFullscreen);
document.addEventListener('keypress', keyPress);

/*==================== TICKETS LOUPE ====================*/

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.querySelector(imgID);

  /* Создать увеличительное стекло: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Вставить увеличительное стекло: */
  img.parentElement.insertBefore(glass, img);

  /* Установите свойства фона для стекла лупы: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Выполните функцию, когда кто-то перемещает лупу по изображению: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /* а также для сенсорных экранов: */
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Предотвратите любые другие действия, которые могут возникнуть при перемещении по изображению */
    e.preventDefault();
    /* Получить позиции курсора x и y: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Не допускайте, чтобы лупа находилась вне изображения: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Установите положение стекла лупы: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Покажите, что такое увеличительное стекло "смотреть": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Получить x и y позиции изображения: */
    a = img.getBoundingClientRect();
    /* Вычислите координаты курсора x и y относительно изображения: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

magnify(".tickets-section__img", 1.5);

/*==================== TICKETS VALIDATION ====================*/
const date = document.querySelector('input#date');
const timeSelect = document.querySelector('select#time');

function getMinDate() {
  var dtToday = new Date();
  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if(month < 10) month = '0' + month.toString();
  if(day < 10) day = '0' + day.toString();
  
  date.min = year + '-' + month + '-' + day;
  date.value = date.min;
}

function getOutput(h, m) {
  let hours = (h < 10) ? '0' + h.toString() : h;
  let minutes = (m < 10) ? '0' + m.toString() : m;
  return `${hours} : ${minutes}`;
}

function getTimeOptions() {
  var time = new Date();
  time.setHours(9);
  time.setMinutes(0);
  while (time.getHours() < 18) {
      var opt = document.createElement('option');
      opt.value = getOutput(time.getHours(), time.getMinutes());
      opt.innerHTML = opt.value;
      timeSelect.appendChild(opt);
      time.setMinutes(time.getMinutes() + 30);
  }
}

getMinDate();
getTimeOptions();

var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}

// Validate the field
var hasError = function (field) {

  // Don't validate submits, buttons, file and reset inputs, and disabled fields
  if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

  // Get validity
  var validity = field.validity;

  // If valid, return null
  if (validity.valid) return;

  // If field is required and empty
  if (validity.valueMissing) return 'Please fill out this field.';

  // If not the right type
  if (validity.typeMismatch) {

      // Email
      if (field.type === 'email') return 'Please enter an email address.';

      // URL
      if (field.type === 'url') return 'Please enter a URL.';

  }

  // If too short
  if (validity.tooShort) return 'Please lengthen this text to ' + field.getAttribute('minLength') + ' characters or more. You are currently using ' + field.value.length + ' characters.';

  // If too long
  if (validity.tooLong) return 'Please shorten this text to no more than ' + field.getAttribute('maxLength') + ' characters. You are currently using ' + field.value.length + ' characters.';

  // If number input isn't a number
  if (validity.badInput) return 'Please enter a number.';

  // If a number value doesn't match the step interval
  if (validity.stepMismatch) return 'Please select a valid value.';

  // If a number field is over the max
  if (validity.rangeOverflow) return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

  // If a number field is below the min
  if (validity.rangeUnderflow) return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';

  // If pattern doesn't match
  if (validity.patternMismatch) {

      // If pattern info is included, return custom error
      if (field.hasAttribute('title')) return field.getAttribute('title');

      // Otherwise, generic error
      return 'Please match the requested format.';

  }

  // If all else fails, return a generic catchall error
  return 'The value you entered for this field is invalid.';

};


// Show an error message
var showError = function (field, error) {
  field.classList.add('error');

  var id = field.id || field.name;
  if (!id) return;

  var message = field.form.querySelector('.error-message#error-for-' + id );
  if (!message) {
      message = document.createElement('div');
      message.className = 'error-message';
      message.id = 'error-for-' + id;
      field.parentNode.insertBefore( message, field.nextSibling );
  }
  
  field.setAttribute('aria-describedby', 'error-for-' + id);
  message.innerHTML = error;
  message.style.display = 'block';
  message.style.visibility = 'visible';
};

// Remove the error message
var removeError = function (field) {
  field.classList.remove('error');
  field.removeAttribute('aria-describedby');

  var id = field.id || field.name;
  if (!id) return;

  var message = field.form.querySelector('.error-message#error-for-' + id + '');
  if (!message) return;

  message.innerHTML = '';
  message.style.display = 'none';
  message.style.visibility = 'hidden';
};

// Listen to all blur events
document.addEventListener('blur', function (event) {
  if (!event.target.form.classList.contains('validate')) return;
  var error = hasError(event.target);

  if (error) {
      showError(event.target, error);
      return;
  }
  removeError(event.target);

}, true);

/*==================== TICKETS MODAL CALCULATOR ====================*/
const selectTicketType = document.querySelector('select#ticket-type');
const inputsModal = document.querySelectorAll('.tickets-modal__amount');
const quantityModalBtns = document.querySelectorAll('.tickets-modal__amount-btn');
const overviewDate = document.querySelector('.icon-date.overview-text');
const overviewTime = document.querySelector('.icon-time.overview-text');
const overviewTicketType = document.querySelector('.icon-type.overview-text');
const overviewQuantity = document.querySelectorAll('.overview-price__quantity');
const overviewQuantityPrice = document.querySelectorAll('.overview-price__price');
const overviewPriceBasic = document.querySelectorAll('.overview-price__text-val-basic');
const overviewPriceSenior = document.querySelectorAll('.overview-price__text-val-senior');
const overviewPrice = document.querySelector('.overview-price__sum');

function updateOverviewDate() {
  let options = { weekday: 'long', month: 'long', day: 'numeric'};
  let dateOfVisiting = new Intl.DateTimeFormat('en-US', options).format(new Date(date.value));
  overviewDate.innerText = dateOfVisiting;
}

function countPriceModal() {
  let ticketTypeValue = selectTicketType.options[selectTicketType.selectedIndex].value;
  for (let i = 0; i < 2; i++) {
    overviewQuantity[i].innerText = inputsModal[i].value;
    overviewPriceBasic[i].innerHTML = ticketTypeValue;
    overviewPriceSenior[i].innerHTML = ticketTypeValue / 2;
  }
  overviewQuantityPrice[0].innerText = inputsModal[0].value * ticketTypeValue + ' €';
  overviewQuantityPrice[1].innerText = inputsModal[1].value * ticketTypeValue / 2 + ' €';
  overviewPrice.innerText = calculate(
    ticketTypeValue, 
    inputsModal[0].value, 
    inputsModal[1].value) + ' €';
}

date.addEventListener('change', updateOverviewDate);
timeSelect.addEventListener('change', () => overviewTime.innerText = timeSelect.options[timeSelect.selectedIndex].innerText);
selectTicketType.addEventListener('change', () => { 
  countPriceModal();
  overviewTicketType.innerText = selectTicketType.options[selectTicketType.selectedIndex].innerText;
});
for (var btnModal of quantityModalBtns) {
  btnModal.addEventListener('click', countPriceModal);
}

/*==================== TICKETS SECTION CALCULATOR ====================*/
const permanent = document.getElementById("type-permanent");
const temporary = document.getElementById("type-temporary");
const combined = document.getElementById("type-combined");

const radios = document.querySelectorAll('.tickets-section__input_radio');
const inputs = document.querySelectorAll('.tickets-section__amount');
const btns = document.querySelectorAll('.tickets-section__amount-btn');
const totalPrice = document.querySelector('.tickets-section__price-num');
let price = 0;

function calculate(type, basic, senior) {
  return (type * basic) + (type * senior / 2);
}

function setDataForModal(num) {
  selectTicketType.options[num].selected = true;
  inputsModal[0].value = inputs[0].value;
  inputsModal[1].value = inputs[1].value;
  overviewTicketType.innerText = selectTicketType.options[selectTicketType.selectedIndex].innerText;
  overviewPrice.innerText = price + ' €';
}

function countPrice() {
  let i = 0;
  for (var radio of radios) {
    if (radio.checked) {
      price = calculate(radio.value, inputs[0].value, inputs[1].value);
      localStorage.setItem('radio-ticket-num', i);
      localStorage.setItem('basic-value', inputs[0].value);
      localStorage.setItem('senior-value', inputs[1].value);
      setDataForModal(i+1);
    }
    i++;
  }
  totalPrice.innerText = price;
}

function getFromLocaleStorage() {
  let radio = localStorage.getItem('radio-ticket-num');
  inputs[0].value = localStorage.getItem('basic-value');
  inputs[1].value = localStorage.getItem('senior-value');

  switch (radio) {
    case "0": permanent.checked = true; break;
    case "1": temporary.checked = true; break;
    case "2": combined.checked = true; break;
  }
}

for (var radio of radios) {
  radio.addEventListener('click', countPrice);
}
for (var btn of btns) {
  btn.addEventListener('click', countPrice);
}
getFromLocaleStorage();
countPrice();
countPriceModal();

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 560) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

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

/*==================== VIDEO SLIDER ====================*/
const smallVideos = document.querySelectorAll('.swiper-video');
const videoSliderBtnPrev = document.querySelector('.swiper-button-prev');
const videoSliderBtnNext = document.querySelector('.swiper-button-next');
const videoSliderBullets = document.querySelectorAll('.swiper-pagination-bullet');
let videoNum = 0;
let numSlidesVideo = 5;

function stopYoutubeVideo() {
  smallVideos.forEach(el =>
    el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
  );
}

nextVideo = function() {
  videoNum++;
  if (videoNum >= numSlidesVideo) videoNum = 0;
  setMainVideo(videoNum);
},
prevVideo = function() {
  videoNum--;
  if (videoNum < 0) videoNum = numSlidesVideo - 1;
  setMainVideo(videoNum);
};

function setMainVideo(num) {
  video.src = `./assets/video/video${num}.mp4`;
  video.poster = `./assets/video/poster${num}.jpg`;
  video.load();
  video.pause();
  showPlayIcon();
  videoNum = num;
  stopYoutubeVideo();
}

videoSliderBtnPrev.addEventListener('click', prevVideo);
videoSliderBtnNext.addEventListener('click', nextVideo);
videoSliderBullets.forEach((bullet, num) => bullet.addEventListener('click', () => setMainVideo(num)));

console.log("");
 