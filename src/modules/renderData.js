const renderData = (() => {
  function searchResults(logData) {
    const location = document.querySelector(".location");
    const description = document.querySelector(".description");
    const currentTemp = document.querySelector(".current-temp");
    const feelsLike = document.querySelector(".feels-like");
    const highTemp = document.querySelector(".high-temp");
    const lowTemp = document.querySelector(".low-temp");
    const humidity = document.querySelector(".humidity");

    location.textContent = `${logData.location}`;
    description.textContent =
      `${logData.description}`.charAt(0).toUpperCase() +
      `${logData.description}`.slice(1);
    currentTemp.textContent = `Current Temp: ${logData.currentTemp} °F`;
    feelsLike.textContent = `Feels Like: ${logData.feelsLike} °F`;
    highTemp.textContent = `High: ${logData.highTemp} °F`;
    lowTemp.textContent = `Low: ${logData.lowTemp} °F`;
    humidity.textContent = `${logData.humidity} % humidity`;
  }

  return searchResults;
})();

export default renderData;
