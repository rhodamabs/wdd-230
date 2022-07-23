const url ='..//api.openweathermap.org/data/2.5/forecast?q=bethesda&appid=a87edcd23002a231974ad3dd082effc8'

fetch(url)
.then(function(response) {response.json()})
.then(function (jsonObject){
    const data = jsonObject;
    console.log(data);
    for(i=0; i<5;i++){
        document.getElementById('day' +(i+1)+ "Min").innerHTML = "Min:" + Number(data.list.main[i].main.temp_min - 288.53).toFixed(1)+ "°";
    }
    for(i=0; i<5;i++){
        document.getElementById('day' +(i+1)+ "Max").innerHTML = "Max:" + Number(data.list.main[i].main.temp_max - 288.53).toFixed(1)+ "°";
    }
    for(i=0; i<5;i++){
        document.getElementById('img' +(i+1)).src ="//openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})

const d = new Date;
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function checkDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0; i<5;i++){
    document.getElementById('day' +(i+1)).innerHTML = weekday[checkDay(i)];
}