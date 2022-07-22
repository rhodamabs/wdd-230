
const date = new Date();
const month = date.getMonth()+1;
console.log(month);
const day = date.getDate();
console.log(day);
const year = date.getFullYear();
const fulldate = ` ${month}.${day} .${year}`;
document.getElementById('date').textContent = fulldate;