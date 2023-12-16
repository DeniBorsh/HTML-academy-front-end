let cards = document.querySelector('.cards');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let cardViewButtonGrid = document.querySelector('.card-view-button-grid');

cardViewButtonGrid.onclick = function() {
  cards.classList.remove('list');
  cardViewButtonGrid.classList.add('active');  
  cardViewButtonList.classList.remove('active');  
};

cardViewButtonList.onclick = function() {
    cards.classList.add('list');
    cardViewButtonGrid.classList.remove('active');  
    cardViewButtonList.classList.add('active');  
};