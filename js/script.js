'use strict';

const cartButton = document.querySelector('#cart-button'),
  modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close');

cartButton.addEventListener('click', event => {
  modal.classList.add('is-open');
});

closeBtn.addEventListener('click', event => {
  modal.classList.remove('is-open');
});

