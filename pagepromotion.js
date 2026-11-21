// Fonction pour appliquer le code promo
function applyPromoCode() {
    const input = document.getElementById('promoCodeInput').value;
    const promoMessage = document.getElementById('promoMessage');

    if (input === 'PROMO10') {
        promoMessage.style.color = 'green';
        promoMessage.textContent = 'Code promo appliqué : 10 % de réduction !';
    } else {
        promoMessage.style.color = 'red';
        promoMessage.textContent = 'Code promo invalide. Essayez encore.';
    }
}

// Fonction pour soumettre un avis
function submitReview() {
    const reviewText = document.getElementById('reviewText').value;
    const reviewsList = document.getElementById('reviewsList');

    if (reviewText.trim()) {
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewsList.appendChild(newReview);
        document.getElementById('reviewText').value = ''; // Réinitialiser le champ texte
    } else {
        alert("Veuillez écrire un avis avant de soumettre.");
    }
}
// Initialisation du compteur du panier
let cartCount = 0;

// Fonction pour ajouter un produit au panier
function addToCart(productName, quantityId) {
    // Récupérer la quantité de l'article sélectionné
    const quantity = parseInt(document.getElementById(quantityId).value);
    
    // Vérifier que la quantité est valide (supérieure à 0)
    if (isNaN(quantity) || quantity <= 0) {
        alert("Veuillez entrer une quantité valide.");
        return;
    }
    
    // Incrémenter le nombre d'articles dans le panier
    cartCount += quantity;
    
    // Mettre à jour le compteur du panier dans l'interface
    document.getElementById('cart-count').textContent = cartCount;
    
    // Afficher un message de confirmation
    alert(`${productName} ajouté au panier.`);
}


// Boutons 'Ajouter au Panier' des promotions
document.querySelectorAll('.product button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
  });
});
