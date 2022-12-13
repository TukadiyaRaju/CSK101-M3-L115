//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
const temperatur = document.getElementById('temperature');
const city = document.getElementById('city');
const time = document.getElementById('time');
const date = document.getElementById('date');
const summary = document.getElementById('summary');

const cloudy = document.getElementById('cloudy');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const snow = document.getElementById('snow');

fetch(
  'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8f82647b2f023d441f1ce72dbb21e5fe'
)
  .then((response) => response.json())
  .then((data) => {
    const dateObj = new Date();
    let dt = `${dateObj}`;
    console.log(dt);
    temperatur.innerText = Math.round(data.main.temp - 273.15);
    city.innerText = data.name;
    time.innerText = dt.slice(16, 21);
    date.innerText = dt.slice(0, 15);
    summary.innerText = data.weather[0].main;

    cloudy.innerHTML = data.clouds.all;
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed;
    snow.innerHTML = data.snow['1h'];
  });
// https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=8f82647b2f023d441f1ce72dbb21e5fe
