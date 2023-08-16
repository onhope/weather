const API_KEY = 'e543e844eef63b453a5925b31becac3f';

const getWeather = async (city = 'seoul') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const response = await axios.get(url)
  console.log(response);
  ;
}

getWeather();