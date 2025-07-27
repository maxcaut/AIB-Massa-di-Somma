const username = document.querySelector('#username');
const password = document.querySelector('#password');
const accedi = document.querySelector('#Accedi-btn');

username.focus();

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

      // prima registra log, poi redirect
      registraLog(username.value)
        .finally(() => {
          window.location.href = '/dash.html';
        });

    } else {
      alert("Username o Password Errati");
      location.reload();
    }
  } catch (err) {
    console.error("Errore nel caricamento utenti.json", err);
    alert("Errore interno");
  }
}

function registraLog(user) {
  const logData = {
    username: user,
    time: new Date().toISOString()
  };
  return fetch('https://usebasin.com/f/6d0f1a17b962', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(logData)
  })
  .then(res => res.text())
  .then(txt => console.log('✅ Log inviato:', txt))
  .catch(err => console.error('❌ Errore invio log:', err));
}
