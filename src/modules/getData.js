const getWeatherData = async (location) => {
  const openWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ab43353ad33f5538c80510eb9c20f0e&units=imperial`;

  const response = await fetch(openWeatherAPI, { mode: "cors" });
  const weatherData = await response.json();
  const logData = processData(weatherData);
  console.log(weatherData);
  console.log(logData);
};

const processData = (weatherData) => {
  const locationData = {
    location: weatherData.name,
    currentTemp: weatherData.main.temp,
    feelsLike: weatherData.main.feels_like,
    highTemp: weatherData.main.temp_max,
    lowTemp: weatherData.main.temp_min,
    humidity: weatherData.main.humidity,
    description: weatherData.weather[0].description,
  };

  return locationData;
};

export default getWeatherData;
