const projects = {
  graphic: [
    "vaina",
    "vertigo",
    "rayons-ouverts",
    "pratique-enseignement",
    "made-in-data",
    "dialogues",
    "vent-vivant",
    "professoral-recipes",
    "compas",
    "socio-specimen",
    "japanese-city-posters",
    "home-postcards"
  ],

  object: [
    "maree",
    "feuilles-radiantes",
     "t-bone-chair"
  ],

  writing: [
    "writing-without-writing",
    "speculative-calendars",
    "t-bone-book",
    "emotions-sans-nom",
    "briser-manifesto",
    "languages-in-order-of-survival"
  ]
};

const currentProject = document.body.dataset.project;
const category = document.body.dataset.category;

const categoryProjects = projects[category];

const currentIndex = categoryProjects.indexOf(currentProject);

const prevButton = document.querySelector('.project-nav.prev');
const nextButton = document.querySelector('.project-nav.next');


const previousProject = categoryProjects[currentIndex - 1];
const nextProject = categoryProjects[currentIndex + 1];


if (prevButton) {
  if (previousProject) {
    prevButton.href = `${previousProject}.html`;
  } else {
    prevButton.style.visibility = "hidden";
    prevButton.style.pointerEvents = "none";
  }
}

if (nextButton) {
  if (nextProject) {
    nextButton.href = `${nextProject}.html`;
  } else {
    nextButton.style.visibility = "hidden";
    nextButton.style.pointerEvents = "none";
  }
}

const images = document.querySelectorAll('.zoomable');
const overlay = document.getElementById('overlay');

images.forEach(img => {
  img.addEventListener('click', e => {
    e.stopPropagation();

    const current = document.querySelector('.fullwindow');

    if (current) {
      current.classList.remove('fullwindow');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      return;
    }

    img.classList.add('fullwindow');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

document.addEventListener('click', () => {
  const current = document.querySelector('.fullwindow');

  if (current) {
    current.classList.remove('fullwindow');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
});