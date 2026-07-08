const formular = document.getElementById("kontakt-formular");
const fehlerText = document.getElementById("fehler-text");

formular.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const nachricht = document.getElementById("nachricht").value;

  if (name === "" || email === "" || nachricht === "") {
    fehlerText.textContent = "Bitte fülle alle Felder aus.";
    return;
  }

  if (!email.includes("@")) {
    fehlerText.textContent = "Bitte gib eine gültige E-Mail-Adresse ein.";
    return;
  }

  fehlerText.style.color = "#7CFC00";
  fehlerText.textContent = "Nachricht erfolgreich gesendet, " + name + "!";
});
