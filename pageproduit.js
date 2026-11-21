let cart = [];

// Données des produits (8 par catégorie)
const productsData = {
    homme: [
        { name: 'T-shirt Sport', price: 30, description: 'T-shirt confortable pour le sport.', image: 'image1.jpg' },
        { name: 'Short de Sport', price: 25, description: 'Short léger et pratique.', image: 'image2.jpg' },
        { name: 'Veste Sport', price: 60, description: 'Veste chaude pour le sport.', image: 'image3.jpg' },
        { name: 'Chaussures Sport', price: 90, description: 'Chaussures de course légères.', image: 'image4.jpg' },
        { name: 'Pantalon Sport', price: 45, description: 'Pantalon confortable pour le sport.', image: 'image5.jpg' },
        { name: 'Casquette', price: 20, description: 'Casquette pour le sport.', image: 'image6.jpg' },
        { name: 'Gants Sport', price: 15, description: 'Gants de sport pour l\'entrainement.', image: 'image7.jpg' },
        { name: 'Chaussettes Sport', price: 10, description: 'Chaussettes résistantes pour sport.', image: 'image8.jpg' }
    ],
    femme: [
        { name: 'Robe Élégante', price: 60, description: 'Robe de soirée élégante.', image: 'image9.jpg' },
        { name: 'Blouse Chic', price: 35, description: 'Blouse légère et chic.', image: 'image10.jpg' },
        { name: 'Jupe', price: 40, description: 'Jupe moderne pour l\'été.', image: 'image11.jpg' },
        { name: 'Sac à Main', price: 80, description: 'Sac à main chic pour toutes occasions.', image: 'image12.jpg' },
        { name: 'Chaussures Élégantes', price: 70, description: 'Chaussures de soirée.', image: 'image13.jpg' },
        { name: 'Lunettes de Soleil', price: 20, description: 'Lunettes stylées pour l\'été.', image: 'image14.jpg' },
        { name: 'Bandeau', price: 15, description: 'Bandeau élégant pour cheveux.', image: 'image15.jpg' },
        { name: 'Veste en Cuir', price: 120, description: 'Veste en cuir tendance.', image: 'image16.jpg' }
    ],
    enfant: [
        { name: 'T-shirt Enfant', price: 15, description: 'T-shirt confortable pour les enfants.', image: 'image17.jpg' },
        { name: 'Pantalon Enfant', price: 18, description: 'Pantalon confortable pour les enfants.', image: 'image18.jpg' },
        { name: 'Chaussures Enfant', price: 25, description: 'Chaussures pour enfants.', image: 'image19.jpg' },
        { name: 'Casquette Enfant', price: 12, description: 'Casquette stylée pour enfants.', image: 'image20.jpg' },
        { name: 'Veste Enfant', price: 30, description: 'Veste chaude pour enfants.', image: 'image21.jpg' },
        { name: 'Pull Enfant', price: 20, description: 'Pull doux pour enfants.', image: 'image22.jpg' },
        { name: 'Robe Enfant', price: 25, description: 'Robe jolie pour filles.', image: 'image23.jpg' },
        { name: 'Short Enfant', price: 15, description: 'Short confortable pour enfants.', image: 'image24.jpg' }
    ]
};

// Fonction pour afficher les produits d'une catégorie
function showCategory(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products

    const categoryProducts = productsData[category];
    categoryProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p class="price">€${product.price}</p>
            <p class="description">${product.description}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Ajouter au panier</button>
            <div class="add-to-cart" onclick="addToCart('${product.name}', ${product.price})">🛒</div>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Ajouter un produit au panier
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCart();
}

// Mettre à jour le panier
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - €${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `€${total.toFixed(2)}`;
}

// Afficher ou masquer le panier
document


// ===== Fonctions ajoutées =====
function checkout() {
  if (cart.length === 0) { alert("Votre panier est vide."); return; }
  alert("Commande validée !");
  cart = [];
  updateCart();
}
function clearCart() { cart = []; updateCart(); }

document.querySelector('.bx-cart').addEventListener('click', function (e) {
  e.preventDefault();
  var p = document.getElementById('cart-popup');
  p.style.display = (p.style.display === 'block') ? 'none' : 'block';
});
showCategory('homme');
