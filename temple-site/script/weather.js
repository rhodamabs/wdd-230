let tempNumber = document.getElementById('temp');
const captionDesc = document.querySelector('figcaption');
const weatherIcon = document.querySelector('#weather_icon');
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=1105844&appid=53a50c29415e591a6c5a1085ae7941c9&units=metric";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfor) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfor);

    tempNumber.innerHTML = `<strong>${weatherInfor.main.temp.toFixed(0)}</strong>` ;

    const icon_path = `https://openweathermap.org/img/w/${weatherInfor.weather[0].icon}.png`
    console.log(icon_path)

    const desc = weatherInfor.weather[0].description;

    weatherIcon.setAttribute('src', icon_path);weatherIcon.setAttribute('alt', desc);
   
    let newDesc = desc.toUpperCase();
    captionDesc.textContent = newDesc;
    console.log(newDesc);
});

