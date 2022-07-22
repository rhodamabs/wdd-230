const today = new Date();
 const dayNumber = today.getDay();

const element = document.querySelector('#message');
 if (dayNumber == 1 || dayNumber == 2) { 
     element.classList.add('showme');
     element.classList.remove('hideme');
 } else {
     element.classList.add('hideme');
     element.classList.remove('showme');
 }
