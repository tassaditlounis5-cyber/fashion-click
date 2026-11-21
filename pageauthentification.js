function validateForm(event) {
    // Récupérer les valeurs des champs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Expression régulière pour l'email

    // Vérification si l'email est valide
    if (!email.match(emailPattern)) {
        alert("Veuillez entrer un email valide.");
        event.preventDefault(); // Empêche la soumission du formulaire
        return false;
    }

    // Vérification si le mot de passe est vide
    if (password === "") {
        alert("Le mot de passe ne peut pas être vide.");
        event.preventDefault(); // Empêche la soumission du formulaire
        return false;
    }

    // Si toutes les validations passent
    return true;
}

// Attache la validation et évite l'envoi POST (pas de serveur)
var loginForm = document.querySelector('form');
if (loginForm) {
  loginForm.addEventListener('submit', validateForm);
  loginForm.addEventListener('submit', function (e) {
    if (!e.defaultPrevented) {
      e.preventDefault();
      alert('Connexion réussie (démonstration, sans base de données).');
    }
  });
}
