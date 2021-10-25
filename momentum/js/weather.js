const city = document.getElementById('city');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather-desc');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');
const weatherIcon = document.getElementById('weather-icon');

async function getWeather() {
  city.value = (!localStorage.getItem("city")) ? "Minsk" : localStorage.getItem("city");

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${switchLanguage('ru', 'en')}&appid=2c4fd3e8e892c05931cc832a82778a39&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    const picUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.style.backgroundImage = 'url('+ picUrl +')';
    weatherIcon.classList.remove('hidden');
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weather.textContent = data.weather[0].description;
    wind.textContent = `${switchLanguage('Скорость ветра', 'Wind speed')}: ${Math.round(data.wind.speed)} mps`;
    humidity.textContent = `${switchLanguage('Влажность', 'Humidity')}: ${data.main.humidity}%`;
  } catch {
    weatherIcon.classList.add('hidden');
    temperature.textContent = ""
    weather.textContent = ""
    wind.textContent = switchLanguage('Город не найден', 'City not found');
    humidity.textContent = ""
  }
}

function setCity(e) {
  setToLocalStorage(e, 'city', city);
  getWeather();
}

city.addEventListener('blur', setCity);

getWeather();