

const forecastURL ="//api.openweathermap.org/data/2.5/onecall?lat=17.8216&lon=31.0492&exclude=minutely,hourly&units=imperial&appid=a87edcd23002a231974ad3dd082effc8";
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const dailyForecast = jsonObject.daily.slice(0, 4);
    console.log(jsonObject);

    const d = new Date();

    const todayDayNumber = d.getDay();

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let forecastDayNumber = todayDayNumber;

    dailyForecast.forEach((weather) => {
      forecastDayNumber += 1;
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }
      const forecastItem = document.createElement("div");
      forecastItem.classList = "forecast-item";
      const dayName = document.createElement("h3");
      dayName.textContent = weekday[forecastDayNumber];

      const iconPath =
        "//openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png";
      const icon = document.createElement("img");
      icon.src = iconPath;
      icon.alt = weather.weather[0].description;

      const temp = document.createElement("p");
      temp.textContent = weather.temp.day + "\xB0F";

      forecastItem.appendChild(dayName);
      forecastItem.appendChild(icon);
      forecastItem.appendChild(temp);

      document.querySelector(".fore-container").appendChild(forecastItem);
    });
  });
