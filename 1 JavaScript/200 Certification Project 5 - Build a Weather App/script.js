const weatherInfo = document.getElementById("weather-info");
const locationSelector = document.getElementById("location-selector");
const getWeatherBtn = document.getElementById("get-weather-btn");

async function getWeather(city) {
  try {
    return await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
      .then(res => res.json());
  } catch(err) {
    console.log(err);
  }
}

async function showWeather(city) {
  try {
    const weatherData = await getWeather(city);
    const {weather, main, wind, name} = weatherData;
    weatherInfo.innerHTML = `
      <h1 id="location">${name}</h1>
      <div id="primary-info">
        <div id="main-temperature">${main.temp}&#176; C</div>
        <div id="icon-container">
          <img src="${weather[0].icon}" id="weather-icon">
          <span id="weather-main">${weather[0].main}</span>
        </div>
      </div>
      <hr>
      <div id="secondary-info">
        <div id="secondary-info-top">
          <div id="feels-like">Feels like: ${main.feels_like}&#176; C</div>
          <div id="humidity">Humidity: ${main.humidity}%</div>
        </div>
        <div id="secondary-info-bottom">
          <div id="wind">Wind: ${wind.speed} m/s</div>
          <div id="wind-gust">Gust: ${wind.gust ? wind.gust + " m/s" : "N/A"}</div>
        </div>
      </div>
    `;
  } catch(err) {
    alert("Something went wrong, please try again later");
  }
}

getWeatherBtn.addEventListener("click", () => {
  const loc = locationSelector.value;
  if(loc === "") {
    return;
  }
  showWeather(loc);
});