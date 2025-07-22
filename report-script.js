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
    }, function(error) {
      console.log("Errore nell'invio:", error);
      alert("Si è verificato un errore, riprova.");
    });
});