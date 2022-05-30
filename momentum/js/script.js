// DOM Elements
const time = document.getElementById('time'),
  date = document.getElementById('date'),
  greeting = document.getElementById('greeting'),
  greetingBackground = document.getElementById('window'),
  username = document.getElementById('name'),
  prevSlideBtn = document.getElementById('slide-prev'),
  nextSlideBtn = document.getElementById('slide-next'),
  imgApiRadios = document.querySelectorAll('.radio-api'),
  searchTheme = document.getElementById('api-search-photos');

const imgCount = 20;
let imgId = getRandomInt(imgCount);
let imgTheme = 'night';
let additionalTheme = '';
let url = `https://raw.githubusercontent.com/imma-fish-u/stage1-tasks/assets/images/${imgTheme}/${addZero(imgId)}.jpg`;
let apiImgArr = [];
let stateImgApi = "Github";
const apiUnsplashKey = 'J4rlOdfzRtUrpPNx5GoBzofosNSPN4sTJWbNlVKXPHc';
const apiFlickrKey = 'cc9ab8dbcb3b3c41252383aff85a0df4';

const partOfDay = [
  {
    name: 'night',
    greeting: 'Good night, ',
    greetingRu: 'Доброй ночи, ',
    flickrThemeCode: '72157720062587146'
  },
  {
    name: 'morning',
    greeting: 'Good morning, ',
    greetingRu: 'Доброе утро, ',
    flickrThemeCode: '72157720069530982'
  },
  {
    name: 'afternoon',
    greeting: 'Good afternoon, ',
    greetingRu: 'Добрый день, ',
    flickrThemeCode: '72157720111881805'
  },
  {
    name: 'evening',
    greeting: 'Good evening, ',
    greetingRu: 'Добрый вечер, ',
    flickrThemeCode: '72157720111880160'
  },
];

function getGalleryId() {
  let id = '72157720111881805';
  partOfDay.forEach(el => {
    if (el.name == imgTheme) 
      id = el.flickrThemeCode;
  });
  return id;
}

function getImgUrl() {
  const img = {};
  switch(stateImgApi) {
    case "Github": return `https://raw.githubusercontent.com/imma-fish-u/stage1-tasks/assets/images/${imgTheme}/${addZero(imgId)}.jpg`;
    case "Flickr": return `https://farm${apiImgArr.photos.photo[imgId].farm}.staticflickr.com/${apiImgArr.photos.photo[imgId].server}/${apiImgArr.photos.photo[imgId].id}_${apiImgArr.photos.photo[imgId].secret}.jpg`;
    case "Unsplash": return apiImgArr[imgId].urls.regular;
  }
}

async function getPhotosFromAPI(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    apiImgArr = await response.json();
    setBgGreet();
  } catch (error) { }
}

async function setImgUrl() {
  for (var imgRadio of imgApiRadios) {
    if (imgRadio.checked) {
      stateImgApi = imgRadio.value;
      imgTheme = (additionalTheme) ? additionalTheme : partOfDay[getPartOfDay()].name;

      switch (imgRadio.value) {
        case "Github": getImgUrl(); break;
        case "Flickr": getPhotosFromAPI(`https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${apiFlickrKey}&gallery_id=${getGalleryId()}&format=json&nojsoncallback=1`); break;
        case "Unsplash": getPhotosFromAPI(`https://api.unsplash.com/photos/random/?client_id=${apiUnsplashKey}&count=${imgCount}&orientation=landscape&query=${imgTheme}`); break;
      }
    }
  }
}

function getDayJSON(data) {
  imgTheme = additionalTheme || data.name;
  return (lang.checked) ? data.greetingRu : data.greeting;
}

function setImgTheme(e) {
  if (searchTheme.value.length > 3) {
    additionalTheme = searchTheme.value;
    setImgUrl();
  }
  localStorage.setItem('Keys', e.target.value);
}

for (var imgRadio of imgApiRadios) {
  imgRadio.addEventListener('click', setImgUrl);
}
searchTheme.addEventListener('blur', setImgTheme);

// Show Time && Date
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  setTimeout(showTime, 1000);

  // Date
  let options = { weekday: 'long', month: 'long', day: 'numeric'};
  date.innerText = new Intl.DateTimeFormat(switchLanguage('ru', 'en-US'), options).format(today);
}

function addZero(n) {
  return (n < 10 ? '0' : '') + n;
}

function setGreetText(link, text) {
  const img = new Image();
  img.src = link; 
  img.onload = () => {      
    greetingBackground.style.backgroundImage = `url('${link}')`;
  };
  greeting.textContent = text;
}

function getPartOfDay() {
  let today = new Date(),
  hour = today.getHours();

  if (hour < 6) return 0;
  else if (hour < 12) return 1;
  else if (hour < 18) return 2;
  else return 3;
}

function setBgGreet() {
  setGreetText(getImgUrl(), getDayJSON(partOfDay[getPartOfDay()]));
}

function getName() {
  username.value = localStorage.getItem('name');
}

function setToLocalStorage(e, local, item) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem(local, e.target.value);
      item.blur();
    }
  } else {
    localStorage.setItem(local, e.target.value);
  }
}

function setName(e) {
  setToLocalStorage(e, 'name', username);
}

function prevSlide() {
  imgId--;
  if (imgId < 1) {
    imgId = imgCount;
  }
  setBgGreet();
}

function nextSlide() {
  imgId++;
  if (imgId > imgCount) {
    imgId = 1;
  }
  setBgGreet();
}

username.addEventListener('keypress', setName);
username.addEventListener('blur', setName);
prevSlideBtn.addEventListener('click', prevSlide);
nextSlideBtn.addEventListener('click', nextSlide);

showTime();
setImgUrl();
setBgGreet();
getName();

const checkboxSettings = document.querySelectorAll('.hide-ch');
const checkboxSettingsText = document.querySelectorAll('.text-chb-hide');
const utilComponent = document.getElementById('utils');
const quoteComponent = document.getElementById('quote-container');

function revealHideContent(val, toggle) {
  switch(+val) {
    case 1: utilComponent.style.opacity = (toggle) ? '0' : '1';
      break;
    case 2: quoteComponent.style.opacity = (toggle) ? '0' : '1';
      break;
    case 3: time.style.opacity = (toggle) ? '0' : '1';
      break;
    case 4: date.style.opacity = (toggle) ? '0' : '1';
      break;
    case 5: greeting.style.opacity = (toggle) ? '0' : '1';
      username.style.opacity = (toggle) ? '0' : '1';
      break;
  }
}

checkboxSettings.forEach(el => el.addEventListener('click', () => (revealHideContent(el.value, el.checked))));

const tabTexts = document.querySelectorAll('.segmented-control__text');
const langText = document.getElementById('language-text');

const settingsLang = [
  {
    lang: 'Language (EN/RU)',
    music: 'Music',
    weather: 'Weather',
    namePlaceholder: '[Enter name]',
    apiPlaceholder: 'Search...',
    hideChbText: 'Utilities Quote Time Date Greeting'
  },
  {
    lang: 'Язык (EN/RU)',
    music: 'Музыка',
    weather: 'Погода',
    namePlaceholder: '[Введите имя]',
    apiPlaceholder: 'Поиск...',
    hideChbText: 'Утилиты Цитаты Время Дата Приветствие'
  }
]

function changeLangForComponents() {
  getQuote();
  showTime();
  setBgGreet();
  getWeather();
  tabTexts[0].innerText = switchLanguage(settingsLang[1].music, settingsLang[0].music);
  tabTexts[1].innerText = switchLanguage(settingsLang[1].weather, settingsLang[0].weather);
  username.placeholder = switchLanguage(settingsLang[1].namePlaceholder, settingsLang[0].namePlaceholder);
  langText.innerText = switchLanguage(settingsLang[1].lang, settingsLang[0].lang);
  searchTheme.placeholder = switchLanguage(settingsLang[1].apiPlaceholder, settingsLang[0].apiPlaceholder);

  const hideChbTextArr__EN = settingsLang[0].hideChbText.split(' ');
  const hideChbTextArr__RU = settingsLang[1].hideChbText.split(' ');
  checkboxSettingsText.forEach((el, item) => {
    el.innerText = switchLanguage(hideChbTextArr__RU[item], hideChbTextArr__EN[item])
  });
}

lang.addEventListener('change', changeLangForComponents);

console.log(`1. Часы и календарь +15
- время выводится в 24-часовом формате +5 
- время обновляется каждую секунду - часы идут. +5
- выводится день недели, число, месяц +5  
2. Приветствие +10
- текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь) +5
- пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется, данные о  нём хранятся в local storage +5
3. Смена фонового изображения +20   
- ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения  +5 
- изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана. 
- изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке) +5
- изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке) +5
- при смене слайдов важно обеспечить плавную смену фоновых изображений. +5
4. Виджет погоды +15
- город по умолчанию - Минск, пока пользователь не ввёл другой город
- при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о  нём хранятся в local storage +5
- для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API
- данные о погоде включают в себя: иконку погоды, описание погоды, температуру, скорость ветра, относительную влажность воздуха. Числовые параметры погоды округляются до целых чисел +5
- выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) +5
5. Виджет цитата дня +10
- при загрузке страницы приложения отображается рандомная цитата и её автор +5  
В качестве источника цитаты можно использовать как API, так и созданный вами или найденный в интернете JSON-файл с цитатами и их авторами. API с цитатами не отличаются надёжностью и долговечностью, используемый в качестве источника цитат собственный JSON-файл гарантирует работоспособность вашего приложения. Запросы к JSON также осуществляются асинхронно, таким образом необходимые знания о работе с асинхронными запросами вы получите
- при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +5
6. Аудиоплеер +15
- при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause +3
- при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play +3
- треки можно пролистывать кнопками Play-next и Play-prev
- треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) +3
- трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем +3
- после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый.  +3  
- плейлист генерируется средствами JavaScript (в ходе кросс-чека этот пункт не проверяется)
7. Продвинутый аудиоплеер (реализуется без использования библиотек) +19  
- добавлен прогресс-бар в котором отображается прогресс проигрывания +3
- при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека +3
- над прогресс-баром отображается название трека +3
- отображается текущее и общее время воспроизведения трека +3
- есть кнопка звука при клике по которой можно включить/отключить звук +2
- добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука +3
- можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте +2/3 
(feedback: поведение не всегда корректное, если включить трек по маленькому плэй и не останавливать, а нажать на другой маленький плэй, музыка новая заиграет, но иконка старого плэй не изменится)
8. Перевод приложения на два языка (en/ru или en/be) +15  
- переводится язык и меняется формат отображения даты +3
- переводится приветствие и placeholder +3
- переводится прогноз погоды в т.ч описание погоды (OpenWeatherMap API предоставляет такую возможность) и город по умолчанию +3
- переводится цитата дня +3
- переводятся настройки приложения. При переключении языка приложения в настройках, язык настроек тоже меняется +3
- не переводятся данные, которые вводит пользователь: имя, город, тег для получения фонового изображения от API
9. Получение фонового изображения от API +10
Пункт считается выполненным, если фоновые изображения, полученные от API, отвечают требованиям к фоновым изображениям, указанным в пункте 3: их можно перелистывать кликами по стрелкам, обеспечивается плавная смена фоновых изображений, ссылка на фоновое изображение формируется с учётом времени суток, если пользователь не указал другие теги для их получения. Не проверяем и не реализуем последовательное перелистывание изображений и перелистывание изображений по кругу.
- в качестве источника изображений может использоваться Unsplash API +5
- в качестве источника изображений  может использоваться Flickr API +5   
9. Настройки приложения +14  
- в настройках приложения можно указать язык приложения (en/ru или en/be) +3
- в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +3
- если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +2/3
(feedback: работает только с unsplash) 
- в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3
- скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3
- настройки приложения сохраняются при перезагрузке страницы +0/5
(feedback: данный функционал не реализован)
9. Дополнительный функционал на выбор +10  
- ToDo List - список дел (как в оригинальном приложении) +10
--------------------------------------------------------------
Самооценка: 153/150
Баллы сняты по пунктам 7.7, 9.2, 9.6`);
