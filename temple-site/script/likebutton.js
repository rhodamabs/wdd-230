function buttonClicked(){
    console.log("Button clicked");
}

window.onload=function(){
    const likebtn = document.querySelector('.like');
      let btnliked = Number(window.localStorage.getItem('liked'));
      
      if (btnliked !== 0) {
          btnliked = true;
      } else {
          btnliked = false;
      }
      
      localStorage.setItem('liked', btnliked);
}



