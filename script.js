const username = document.querySelector('#username');
const password =document.querySelector('#password');
const accedi = document.querySelector('#Accedi-btn');


accedi.addEventListener('click', function(){

  


  if (username.value === "111" && password.value === "111") {

    console.log(username.value);
    console.log(password.value);
    sessionStorage.setItem('stats', 1);
    window.location.href = '/dash.html';
  
  }
  else{
    console.log("errore");
    
  }
})










