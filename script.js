const username = document.querySelector('#username');
const password =document.querySelector('#password');
const accedi = document.querySelector('#Accedi-btn');


accedi.addEventListener('click', function(){

  


  if (username.value === "111" && password.value === "111") {
    sessionStorage.setItem('stats', 1);
    window.location.href = '/dash.html';
  
  }
  else{
    location.reload();
    
  }
})










