const username = document.querySelector('#username');
const password = document.querySelector('#password');
const accedi = document.querySelector('#Accedi-btn');

accedi.addEventListener('click', verificaUtente);


function checkEnter(event) {
  if (event.key === "Enter") {
    verificaUtente();
  }
}

async function verificaUtente() {
  try {
    const response = await fetch('utenti.json');
    const utenti = await response.json();

    const utenteValido = utenti.find(u =>
      u.username === username.value && u.password === password.value
    );

    if (utenteValido) {
      sessionStorage.setItem('stats', 1);
      window.location.href = '/dash.html';
    } else {
      alert("Username o Password Errati");
      location.reload();
    }
  } catch (err) {
    console.error("Errore nel caricamento utenti.json", err);
    alert("Errore interno");
  }
}
