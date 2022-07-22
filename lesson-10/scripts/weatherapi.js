    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');

//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5861897&appid=53a50c29415e591a6c5a1085ae7941c9&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfor) => {
   
    console.log(weatherInfor);

    currentTemp.innerHTML = `<strong>${weatherInfor.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherInfor.weather[0].icon}.png`;
    const desc = weatherInfor.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.classList
   
    let newDesc = desc.toUpperCase();
    captionDesc.textContent = newDesc;
    console.log(newDesc);
   
 }); //end of "then" fat arrow function
