const username = document.querySelector('#username');
const password =document.querySelector('#password');
const accedi = document.querySelector('#Accedi-btn');

const userSite = 'aibmassa'
const passSite = 'AIB789'


accedi.addEventListener('click', verificaUtente);


function checkEnter(event) {
    if (event.keyCode === 13) {
      verificaUtente();
    }
  }


function verificaUtente(){

  if (username.value === userSite && password.value === passSite) {
    sessionStorage.setItem('stats', 1);
    window.location.href = '/dash.html';
  
  }
  else{
    alert("Username o Password Errati");
    location.reload();
    
  }

};




