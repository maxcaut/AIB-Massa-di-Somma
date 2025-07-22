// controlla se loggato
const stats = sessionStorage.getItem('stats');
console.log(stats);

if (stats !== '1') {
window.location.href = '/index.html';
    
    
} ;

// ritora home bottone
const bottoneritornohome = document.querySelector('#bottoneRitorno');
bottoneritornohome.addEventListener('click', ritornaHome);

function ritornaHome(){
  window.location.href = '/dash.html';
};





// Inizializza EmailJS con la tua Public Key
(function() {
  emailjs.init("MmdNo-DzYkKtf7JBh"); // Sostituisci con la tua chiave pubblica
})();

// Seleziona il form
const form = document.querySelector("#report-form");

// Aggiungi evento di submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita refresh pagina

  emailjs.sendForm("service_b1workh", "template_iehy0wt", this)
    .then(function() {
      alert("Email inviata con successo!");
      form.reset(); // reset campi form
      window.location.href = '/dash.html';
    }, function(error) {
      console.log("Errore nell'invio:", error);
      alert("Si è verificato un errore, riprova.");
    });
});




function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            document.getElementById("lat").value = position.coords.latitude;
            document.getElementById("lon").value = position.coords.longitude;
          },
          function(error) {
            alert("Errore nel recupero della posizione: " + error.message);
          }
        );
      } else {
        alert("La geolocalizzazione non è supportata dal tuo browser.");
      }
    };
  



