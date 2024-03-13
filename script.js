"use strict";
let formEl = document.querySelector("#searchForm");
let cityInputEl = document.querySelector("#city");
let tempEl = document.querySelector("#temp");
let messageEl = document.querySelector("#message");

async function getData() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInputEl.value}&appid=8f20807cea52eed92572aea82df038d5`
  );
  let data = await res.json();

  // Convert temperature from Kelvin to Celsius and round to the nearest integer
  let temperatureCelsius = Math.round(data.main.temp - 273.15);

  // Update temp element with only the temperature value and Celsius symbol
  tempEl.textContent = `${temperatureCelsius} °C`;
  // Update message element with weather description
  messageEl.textContent = `Weather: ${data.weather[0].description}`;
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  getData();
});
