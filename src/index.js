const getWeatherData = async (location) => {
  const openWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ab43353ad33f5538c80510eb9c20f0e`;

  const response = await fetch(openWeatherAPI, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
};

getWeatherData("grand rapids");
