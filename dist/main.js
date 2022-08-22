(() => {
  "use strict";
  const e = async function (e) {
    const t = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=8ab43353ad33f5538c80510eb9c20f0e&units=imperial`;
    try {
      const e = await fetch(t, { mode: "cors" });
      !(function (e) {
        const t = document.querySelector(".location"),
          n = document.querySelector(".description"),
          o = document.querySelector(".current-temp"),
          c = document.querySelector(".feels-like"),
          i = document.querySelector(".high-temp"),
          r = document.querySelector(".low-temp"),
          m = document.querySelector(".humidity");
        (t.textContent = `${e.location}`),
          (n.textContent =
            `${e.description}`.charAt(0).toUpperCase() +
            `${e.description}`.slice(1)),
          (o.textContent = `Current Temp: ${e.currentTemp} °F`),
          (c.textContent = `Feels Like: ${e.feelsLike} °F`),
          (i.textContent = `High: ${e.highTemp} °F`),
          (r.textContent = `Low: ${e.lowTemp} °F`),
          (m.textContent = `${e.humidity} % humidity`);
      })({
        location: (n = await e.json()).name,
        currentTemp: n.main.temp,
        feelsLike: n.main.feels_like,
        highTemp: n.main.temp_max,
        lowTemp: n.main.temp_min,
        humidity: n.main.humidity,
        description: n.weather[0].description,
      });
    } catch (e) {
      console.error(e);
    }
    var n;
  };
  (() => {
    const t = document.querySelector("button"),
      n = document.querySelector("input");
    t.addEventListener("click", () => {
      const t = document.querySelector("#city-search").value;
      e(t);
    }),
      n.addEventListener("keypress", (e) => {
        13 == e.keyCode && t.click();
      });
  })();
})();
