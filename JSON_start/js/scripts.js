//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=1105844&appid=53a50c29415e591a6c5a1085ae7941c9&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfor) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfor);

    document.getElementById('place').innerHTML = weatherInfor.name;
    document.getElementById('currentTemp').innerHTML = weatherInfor.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfor.wind.speed;


    const iconcode = weatherInfor.weather[0].icon;
    console.log(iconcode);
    const icon_path = `https://openweathermap.org/img/w/${iconcode}.png`
    console.log(icon_path)

    document.getElementById('weathericon').src = icon_path;
 }); //end of "then" fat arrow function



