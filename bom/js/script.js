const userInput = document.getElementById('favchap');
const addButton = document.getElementById('button');
const bookList = document.getElementById('mylist');


addButton.addEventListener('click', function() {
    let favchap = userInput.value;
    if (favchap !=='') {
       const newButton = document.createElement('dbutton');
       newButton.innerHTML = '\u274C';

        const newList = document.createElement('li');
        newList.textContent = userInput.value;
        newList.appendChild(newButton);

        bookList.appendChild(newList);

        userInput.value = '';

        newButton.addEventListener('click', () => {
        bookList.removeChild(newList);
      });

      userInput.focus();
   
    }// end of if
});

