let spotlight1 = document.getElementById('side');
let spotlight2 = document.getElementById('side1');

const requestURL = "https://rhodamabs.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
    
  })
  .then(function (jsonObject) {
    const businesses = jsonObject;
    console.log(businesses);
    let premium = businesses.filter(
      (a) => a.membershipLevel == "Gold" || a.membershipLevel == "Silver"
    );
    premium = premium.sort(() => Math.random() - 0.5);
    displayBusiness(premium);

  });

  function displayBusiness(premium){
    company1 = premium[0];
    company2 = premium[1];
    spotlight1.innerHTML = `<h2>${company1.name}</h2>
   <div><a href="${company1.url}" target="_blank"><img src="${company1.icon}"/></a></div>
    <hr>
   <p>${company1.phoneNumber}</p>
   <hr>
   <p>${company1.membershipLevel}</p>`
   ;

  spotlight2.innerHTML = `<h2>${company2.name}</h2>
   <div><a href="${company2.url}" target="_blank"><img src="${company2.icon}" /></a></div>
   <hr>
   <p>${company2.phoneNumber}</p>
   <hr>
   <p>${company2.membershipLevel}</p>`;
  }