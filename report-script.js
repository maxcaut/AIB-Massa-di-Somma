// Inizializza EmailJS con la tua Public Key
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Sostituisci con la tua chiave pubblica
})();

// Seleziona il form
const form = document.getElementById("report-form");

// Aggiungi evento di submit
form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita refresh pagina

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("Email inviata con successo!");
      form.reset(); // reset campi form
    }, function(error) {
      console.log("Errore nell'invio:", error);
      alert("Si è verificato un errore, riprova.");
    });
});