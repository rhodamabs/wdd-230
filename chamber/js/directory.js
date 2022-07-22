const requestURL = 'https://rhodamabs.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const data  = jsonObject;
    console.log(data);
    data.forEach(displayProphets);
  });
  

  function displayProphets(details){
    // Create elements to add to the document
    let wrapper = document.createElement('div');
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    companyName.textContent = details.name;
    let icon = document.createElement('img');
    let address = document.createElement('h4');
    address.textContent = details.address;
    let phoneNumber = document.createElement('h5');
    phoneNumber.textContent = details.phoneNumber;
    let membership = document.createElement('h5');
    membership.textContent = details.membershipLevel;
    let url = document.createElement('a');
    url.setAttribute('href', details.url);


    // set class attribute to the container
    card.classList.add('cards');
    icon.classList.add('dphotos');
    wrapper.classList.add('gridwrapper');
  
    
   // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
   // (Fill in the blank with the appropriate variable).
    icon.setAttribute('src', details.icon);
    icon.setAttribute('alt', `The icon of ${details.name}.`);

  
    //link attributes
  
  
    // Add/append the section(card) with the h2 element
    wrapper.appendChild(card);
    card.appendChild(icon);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(membership);
 
    card.appendChild(url);
    
   
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.getElementById('myGrid').append(card);
  }

  const gridbutton = document.querySelector("#grid");
  const listbutton = document.querySelector("#list");
  const display = document.querySelector("article");

  // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

  gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("mygrid");
    display.classList.remove("mylist");
  });

  listbutton.addEventListener("click", showList); // example using defined function

  function showList() {
    display.classList.add("mylist");
    display.classList.remove("mygrid");
  }
