function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;

function getForecast(response) {
  console.log(response.data.daily);
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={part}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 
  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  
  let forecastElement = document.querySelector("#forecast");

 
  let forecastHTML = `<div class=row>`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
  forecastHTML = 
    forecastHTML +
   `
  <div class="col=2">
    <div class="weather-forecast-date">${forecastDay(forecastDay.dt)}</div>
      <img 
        src="http://openweathermap.org/imp/wn/50d${forecastDay.weather[0].icon}@2x.png" 
        alt=""
        width="42"
      />
      <div class="weather-forecast-temperatures">
       <span class="weather-forecast-temperature-max">
        ${Math.round(forecastDay.temp.max)}° </span> 
       <span class="weather-forecast-temperature-min">
        ${Math.round(forecastDay.temp.min)}° </span>
      </div>
    </div>
  </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
} 

function displayTemperature(response) {
  let temperatureElement = document.querySelector(#temperature);
  let cityElement = document.querySelector(#city);
  let descriptionElement = document.querySelector(#description);
  let humidityElement = document.querySelector(#humidity);
  let windElement = document.querySelector(#wind);
  let dateElement = document.querySelector(#date);
  let iconElement = document.querySelector(#icon);

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = wath.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src", 
    `http://openweathermap.org/img/wn/${response.data.weather[0](description);<SVGAnimatedStringsad>sad
  sad
  </SVGAnimatedStringsad>
} 

function search(city) {
  let apiKey = "8d9838178b5b401f1b4e7cb5af18e210";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-intup");
  search(cityInputElement.value);
}

let forn = document.querySelector("#search-forn");
forn.addEventListener("submit", handleSubmit);

search("Odessa");