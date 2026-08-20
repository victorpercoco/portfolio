const filters = document.querySelectorAll('.bio-graphic, .bio-object, .bio-writing');
const items = document.querySelectorAll('li');
const galleryItems = document.querySelectorAll('.gallery-item');

const reset = document.getElementById('reset');
const below = document.getElementById('below');
const elsewhere = document.getElementById('elsewhere');
const body = document.querySelector('body');


/* ========================= */
/* STATE VARIABLES */
/* ========================= */

let currentFilter = 'all';
let currentView = 'below';


/* ========================= */
/* RENDER */
/* ========================= */

function updateView() {

  /* VIEW */
  if (currentView === 'below') {
    body.classList.add('list-mode');
    body.classList.remove('elsewhere-mode');
  } else {
    body.classList.add('elsewhere-mode');
    body.classList.remove('list-mode');
  }

  /* FILTER BUTTONS */
  filters.forEach(filter => filter.classList.remove('active'));

document.querySelector('.bio-graphic')?.classList.remove('active');
document.querySelector('.bio-object')?.classList.remove('active');
document.querySelector('.bio-writing')?.classList.remove('active');

if (currentFilter === 'graphic') {
  document.querySelector('.bio-graphic')?.classList.add('active');
}

if (currentFilter === 'object') {
  document.querySelector('.bio-object')?.classList.add('active');
}

if (currentFilter === 'writing') {
  document.querySelector('.bio-writing')?.classList.add('active');
}

  /* LIST FILTERING */
  items.forEach(item => {

    if (
      currentFilter === 'all' ||
      item.classList.contains(currentFilter)
    ) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }

  });

  galleryItems.forEach(item => {

  if (
    currentFilter === 'all' ||
    item.classList.contains(currentFilter)
  ) {
    item.style.display = '';
  } else {
    item.style.display = 'none';
  }

});

}


/* ========================= */
/* FILTERS */
/* ========================= */

filters.forEach(filter => {

  filter.addEventListener('click', () => {

    const type =
      filter.classList.contains('bio-graphic')
        ? 'graphic'
        : filter.classList.contains('bio-object')
        ? 'object'
        : 'writing';

    if (currentFilter === type) {
      currentFilter = 'all';
    } else {
      currentFilter = type;
    }

    updateView();

  });

});


/* ========================= */
/* BELOW / ELSEWHERE */
/* ========================= */

if (below) {

  below.addEventListener('click', () => {

    currentView = 'below';
    updateView();

  });

}

if (elsewhere) {

  elsewhere.addEventListener('click', () => {

    currentView = 'elsewhere';
    updateView();

  });

}


/* ========================= */
/* RESET */
/* ========================= */

if (reset) {

  reset.addEventListener('click', () => {

    currentFilter = 'all';
    currentView = 'below';

    updateView();

  });

}


/* ========================= */
/* INITIALIZE */
/* ========================= */

const badge = document.getElementById('badge');

if (badge) {
badge.addEventListener('click', () => {
  currentView =
    currentView === 'below'
      ? 'elsewhere'
      : 'below';

  updateView();
});
}