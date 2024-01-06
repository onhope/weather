const API_KEY = 'aaaacea872f1f2a59197db45c6a49c7b';
const locationDisplay = document.querySelector(".location");
const temperatureDisplay = document.querySelector(".temperature > span");
const weatherDisplay = document.querySelector(".weather > img")
const feelLikeDisplay = document.querySelector(".feel-like > span");
const windDisplay = document.querySelector(".wind > span");
const weatherSelect = document.querySelector("#weather-select");
const info = document.querySelector(".info"); 

weatherSelect.addEventListener("change", (e) => {
  getWeather(e.target.value);
})

const getWeather = async (city = 'seoul') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await axios.get(url)
  const {name, main, weather, wind} = response.data;

  locationDisplay.innerText = name;
  temperatureDisplay.innerText = tranferTemperature(main.temp);
  weatherDisplay.setAttribute("src", `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
  feelLikeDisplay.innerText = tranferTemperature(main.feels_like);
  windDisplay.innerText = wind.speed;  
}

const tranferTemperature = (temp) => {
  return (temp - 273.15 ).toFixed(1);
}

getWeather();