const theYear = new Date();
document.querySelector('#theYear').textContent = theYear.getFullYear();
document.querySelector('#lu').textContent= document.lastModified

const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August',
'September','October','November', 'December'];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById('currentDate'). textContent = fulldate;

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
 }
 const x = document.getElementById('hamburgerBtn')
 x.onclick = toggleMenu

 