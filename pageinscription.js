
   // Fonction de validation avant soumission du formulaire
function validateForm(event) {
    // Récupérer les valeurs du formulaire
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var age = document.getElementById('age').value;
    var terms = document.getElementById('terms').checked;

    // Valider le format de l'e-mail
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return false;
    }

    // Valider la correspondance des mots de passe
    if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas.");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return false;
    }

    // Valider l'âge (doit être supérieur à 0)
    if (age <= 0) {
        alert("L'âge doit être supérieur à 0.");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return false;
    }

    // Valider l'acceptation des termes et conditions
    if (!terms) {
        alert("Vous devez accepter les termes et conditions.");
        event.preventDefault(); // Empêcher la soumission du formulaire
        return false;
    }

    // Si toutes les validations sont réussies, autoriser la soumission du formulaire
    return true;
}

// Attacher la fonction de validation à l'événement de soumission du formulaire
document.querySelector('form').addEventListener('submit', validateForm);


// Évite l'envoi POST (pas de serveur)
document.querySelector('form').addEventListener('submit', function (e) {
  if (!e.defaultPrevented) {
    e.preventDefault();
    alert('Inscription enregistrée (démonstration, sans base de données).');
    e.target.reset();
  }
});
