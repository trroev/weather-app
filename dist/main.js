(async a=>{const e=await fetch("http://api.openweathermap.org/data/2.5/weather?q=grand rapids&appid=8ab43353ad33f5538c80510eb9c20f0e",{mode:"cors"}),o=await e.json();console.log(o)})();