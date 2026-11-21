// ===== NOUVELLE VERSION (corrigée) =====
let cartCount = 0;

function addToCart(productName, price, quantityId) {
  const quantity = parseInt(document.getElementById(quantityId).value);
  if (isNaN(quantity) || quantity <= 0) {
    alert("Veuillez entrer une quantité valide.");
    return;
  }
  cartCount += quantity;
  document.getElementById('cart-count').textContent = cartCount;
  alert(productName + " ajouté au panier. Quantité : " + quantity + ", total : " + (price * quantity) + " €");
}

function updateTotal() {}

const deliveryForm = document.getElementById('delivery-form');
if (deliveryForm) {
  deliveryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Commande validée (démonstration, sans base de données).');
    deliveryForm.reset();
  });
}

// ===== ANCIENNE VERSION (conservée en commentaire) =====
/*
// Fonction qui calcule et met à jour le total du panier
function updateTotal() {
    let total = 0;

    // Récupérer les produits et leurs quantités
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const price = parseFloat(product.querySelector('.price').getAttribute('data-price'));
        const quantity = parseInt(product.querySelector('input').value);

        total += price * quantity;
    });

    // Mettre à jour le total affiché
    document.getElementById('total-price').textContent = total.toFixed(2) + ' €';
}

// Fonction pour ajouter un produit au panier
function addToCart(productName, quantityId) {
    const quantity = document.getElementById(quantityId).value;
    const price = parseFloat(document.querySelector(`#${quantityId}`).parentNode.querySelector('.price').getAttribute('data-price'));
    
    alert(`${productName} ajouté au panier. Quantité: ${quantity}, Prix unitaire: ${price}€`);
    updateTotal(); // Mettre à jour le total après ajout au panier
}

*/
