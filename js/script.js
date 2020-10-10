'use strict';

const cartButton = document.querySelector('#cart-button'),
  modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close');

cartButton.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

