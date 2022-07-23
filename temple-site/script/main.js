const requestURL = "https://rhodamabs.github.io/wdd-230/temple-site/data/data.json"
let twrapper = document.querySelector('#temples');

fetch(requestURL)
.then (function (response) {
    return response.json();
})
    .then(function (jsonObject) {
        const temples = jsonObject;
        console.log(temples);
       temples.forEach(displayInfor);
    });


    function displayInfor(temple) {
        // Create elements to add to the document
        let card = document.createElement('div');
        let tname = document.createElement('h2');
        let tpicture = document.createElement('img');
        let telphone = document.createElement('p');
        let dedication = document.createElement('p');
        let place = document.createElement('p');
        let serve = document.createElement('p');
        let closeInfor = document.createElement('p');    
        // set class attribute to the container
        twrapper.classList.add('imgWrapper');
        card.classList.add('cards');
        tpicture.classList.add('templeImg');

      
        // Change the textContent property of the h2 element to contain the prophet's full name
        tname.textContent = `${temple.name}`;
        telphone.textContent = `Telephone: ${temple.telephone}`;
        place.textContent = `Location: ${temple.location}`;
        dedication.textContent = `Dedication: ${temple.dedicationDate}`;
        serve.textContent = `Services: ${temple.services}`;
        closeInfor.textContent = `Temple Closure Infor: ${temple.templeClosure}`;
        
        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        tpicture.setAttribute('src', temple.image);
        tpicture.setAttribute('alt', `Picture of ${temple.name} `);
        tpicture.setAttribute('loading', 'lazy');
      
        // Add/append the section(card) with the h2 element
        twrapper.appendChild(card);
        card.appendChild(tpicture);
        card.appendChild(tname);
        card.appendChild(dedication);
        card.appendChild(telphone);
        card.appendChild(place);
        card.appendChild(serve);
        card.appendChild(closeInfor);
        
       
      
        // Add/append the existing HTML div with the cards class with the section(card)
        document.querySelector('#temples').appendChild(card);
      }
    

  