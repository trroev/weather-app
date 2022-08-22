import renderData from "./renderData";

const getWeather = (() => {
  async function getWeatherData(location) {
    const openWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ab43353ad33f5538c80510eb9c20f0e&units=imperial`;

    try {
      const response = await fetch(openWeatherAPI, { mode: "cors" });
      const weatherData = await response.json();
      const logData = processData(weatherData);

      renderData(logData);
    } catch (error) {
      console.error(error);
    }
  }

  function processData(weatherData) {
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
  }

  return getWeatherData;
})();

export default getWeather;
