import getWeather from "./modules/getData";

const handleInput = (() => {
  const searchButton = document.querySelector("button");
  const input = document.querySelector("input");

  searchButton.addEventListener("click", () => {
    const searchInput = document.querySelector("#city-search").value;
    getWeather(searchInput);
  });

  input.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
      searchButton.click();
    }
  });
})();
