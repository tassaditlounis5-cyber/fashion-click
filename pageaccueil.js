// Sélectionner l'icône hamburger et le menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.navmenu');

// Ajouter un événement de clic
menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Ajouter ou supprimer la classe 'active'
});


// Code pour la gestion du clic sur les icônes de la barre de navigation
const searchIcon = document.querySelector('.bx-search');
const userIcon = document.querySelector('.bx-user');
const cartIcon = document.querySelector('.bx-cart');

searchIcon.addEventListener('click', () => {
  alert('Barre de recherche activée');
});

userIcon.addEventListener('click', () => {
  alert('Page utilisateur');
});

cartIcon.addEventListener('click', () => {
  alert('Page panier');
});

// Code pour l'animation de la flèche descendante (scroll)
const downArrow = document.querySelector('.down-arrow a');
downArrow.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#trending').scrollIntoView({ behavior: 'smooth' });
});

const header = document.querySelector("header");

window .addEventListener("scroll",function(){
  header.classList.toggle("sticky", window.scrollY > 0);
});

  
// Code pour le bouton "Lire la suite" des mises à jour
const readMoreButtons = document.querySelectorAll('.update-cart .cart h6');
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Lire la suite...');
  });
});
