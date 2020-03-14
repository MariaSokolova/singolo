const navigation = document.getElementById('navigation');
const button = document.getElementById('button');
const closeButton = document.getElementById('close-btn');

navigation.addEventListener('click', (event) => {
  navigation.querySelectorAll('.navigation__link')
    .forEach(el => el.classList.remove('navigation__active'));
  event.target.classList.add('navigation__active');
});

button.addEventListener('click', (event) => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (!name || !email) {
    return;
  }

  const subject = document.getElementById('subject').value;
  const describe = document.getElementById('content').value;

  document.getElementById('message-subject').innerText = `Subject: ${subject}`;
  if (subject === '') {
    document.getElementById('message-subject').innerText = 'Without Subject';
  }

  const descriptionText = !(describe === '') ? `Describe: ${describe}` : 'Without Description';
  document.getElementById('message-describe').innerText = descriptionText;

  document.getElementById('message-block').classList.remove('hidden');

  event.preventDefault();
});


closeButton.addEventListener('click', () => {
  document.getElementById('message-block').classList.add('hidden');
  document.getElementById('contact-form').reset();
});




//
// var slides = document.querySelectorAll('.slider__item');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);
//
// function nextSlide() {
//   slides[currentSlide].className = 'slider__item';
//   currentSlide = (currentSlide+1)%slides.length;
//   slides[currentSlide].className = 'show-slide';
// }
//-------Переключение слайдов-------------------

// const leftArrow = document.getElementsByClassName('slider__control_left');
// const rightArrow = document.getElementsByClassName('slider__control_right');
//
//
//
//
// leftArrow.addEventListener('click', () => {
//
//   const slides = document.querySelectorAll('.slider__item');
//   console.log('slides=', slides);
//   let currentSlide = 0;
//   slides[currentSlide].className = '.slider__item';
//   currentSlide = (currentSlide+1)%slides.length;
//   // document.getElementsByClassName('slider__item').classList.add('show-slide');
//
//   slides[currentSlide].className = '.slider__item show-slide'
//
// });

//--------Активация экранов телефонов----------------------------

const horizontalPhone = document.getElementsByClassName('phone__horizontal_img')[0];
const horizontalScreen = document.getElementsByClassName('horizontal-screen')[0];

const verticalPhone = document.getElementsByClassName('phone__vertical_img')[0];
const verticalScreen = document.getElementsByClassName('vertical-screen')[0];




horizontalPhone.addEventListener('click', (event) => {
  document.getElementsByClassName('horizontal-screen')[0].classList.toggle('hidden-screen');
});

horizontalScreen.addEventListener('click', (event) => {
  document.getElementsByClassName('horizontal-screen')[0].classList.toggle('hidden-screen');
});

verticalPhone.addEventListener('click', () => {
  console.log('hello000');

  document.getElementsByClassName('vertical-screen')[0].classList.toggle('hidden-screen');
});

verticalScreen.addEventListener('click', () => {
  console.log('hello000');

  document.getElementsByClassName('vertical-screen')[0].classList.toggle('hidden-screen');
});


//------Portfolio. Переключение табов------------
const gallery = document.getElementById('gallery');
const allButton = document.getElementById('all');
const webButton = document.getElementById('web');
const artButton = document.getElementById('art');
const graphicButton = document.getElementById('graphic');
const allCards = [
  {path: 'assets/portfolio/01.png', name: 'Image01'},
  {path: 'assets/portfolio/02.png', name: 'Image02'},
  {path: 'assets/portfolio/03.png', name: 'Image03'},
  {path: 'assets/portfolio/04.png', name: 'Image04'},
  {path: 'assets/portfolio/05.png', name: 'Image05'},
  {path: 'assets/portfolio/06.png', name: 'Image06'},
  {path: 'assets/portfolio/07.png', name: 'Image07'},
  {path: 'assets/portfolio/08.png', name: 'Image08'},
  {path: 'assets/portfolio/09.png', name: 'Image09'},
  {path: 'assets/portfolio/10.png', name: 'Image10'},
  {path: 'assets/portfolio/11.png', name: 'Image11'},
  {path: 'assets/portfolio/12.png', name: 'Image12'},

];

const webCards = [
  {path: 'assets/portfolio/03.png', name: 'Image03'},
  {path: 'assets/portfolio/04.png', name: 'Image04'},
  {path: 'assets/portfolio/05.png', name: 'Image05'},
  {path: 'assets/portfolio/06.png', name: 'Image06'},
  {path: 'assets/portfolio/07.png', name: 'Image07'},
  {path: 'assets/portfolio/08.png', name: 'Image08'},
  {path: 'assets/portfolio/09.png', name: 'Image09'},
  {path: 'assets/portfolio/10.png', name: 'Image10'},
  {path: 'assets/portfolio/11.png', name: 'Image11'},
  {path: 'assets/portfolio/12.png', name: 'Image12'},
  {path: 'assets/portfolio/01.png', name: 'Image01'},
  {path: 'assets/portfolio/02.png', name: 'Image02'}
];

const artCards = [
  {path: 'assets/portfolio/05.png', name: 'Image05'},
  {path: 'assets/portfolio/06.png', name: 'Image06'},
  {path: 'assets/portfolio/07.png', name: 'Image07'},
  {path: 'assets/portfolio/08.png', name: 'Image08'},
  {path: 'assets/portfolio/09.png', name: 'Image09'},
  {path: 'assets/portfolio/10.png', name: 'Image10'},
  {path: 'assets/portfolio/11.png', name: 'Image11'},
  {path: 'assets/portfolio/12.png', name: 'Image12'},
  {path: 'assets/portfolio/01.png', name: 'Image01'},
  {path: 'assets/portfolio/02.png', name: 'Image02'},
  {path: 'assets/portfolio/03.png', name: 'Image03'},
  {path: 'assets/portfolio/04.png', name: 'Image04'}
];

const graphicCards = [
  {path: 'assets/portfolio/07.png', name: 'Image07'},
  {path: 'assets/portfolio/08.png', name: 'Image08'},
  {path: 'assets/portfolio/09.png', name: 'Image09'},
  {path: 'assets/portfolio/10.png', name: 'Image10'},
  {path: 'assets/portfolio/11.png', name: 'Image11'},
  {path: 'assets/portfolio/12.png', name: 'Image12'},
  {path: 'assets/portfolio/01.png', name: 'Image01'},
  {path: 'assets/portfolio/02.png', name: 'Image02'},
  {path: 'assets/portfolio/03.png', name: 'Image03'},
  {path: 'assets/portfolio/04.png', name: 'Image04'},
  {path: 'assets/portfolio/05.png', name: 'Image05'},
  {path: 'assets/portfolio/06.png', name: 'Image06'}
];
const filter = document.getElementById('filter');


allButton.addEventListener('click', () => showCards(allCards));
webButton.addEventListener('click', () => showCards(webCards));
artButton.addEventListener('click', () => showCards(artCards));
graphicButton.addEventListener('click', () => showCards(graphicCards));


function showCards(arr) {
  let cards = '';

  arr.forEach(el => {
    cards += `<div class="portfolio__column"><img src="${el.path}" alt="${el.name}" width="220" height="187"></div>`
  });

  gallery.innerHTML = cards;
}



filter.addEventListener('click', (event) => {
  filter.querySelectorAll('.filter__button')
    .forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');

});



//------Portfolio. Взаимодействие с картинками------------

gallery.addEventListener('click', (event) => {
  gallery.querySelectorAll('.portfolio__column')
    .forEach(el => {
      console.log(el);
      el.firstChild.classList.remove('portfolio__column_bordered')
    });
  event.target.classList.add('portfolio__column_bordered');
});













// function Sim(sldrId) {
//
//   let id = document.getElementById(sldrId);
//   if(id) {
//     this.sldrRoot = id
//   }
//   else {
//     this.sldrRoot = document.querySelector('.slider')
//   };
//
//   // Carousel objects
//   this.sldrList = this.sldrRoot.querySelector('.slider__content');
//   this.sldrElements = this.sldrList.querySelectorAll('.slider__item');
//   this.sldrElemFirst = this.sldrList.querySelector('.slider__item');
//   this.leftArrow = this.sldrRoot.querySelector('slider__control_left');
//   this.rightArrow = this.sldrRoot.querySelector('slider__control_right');
//
//   // Initialization
//   this.options = Sim.defaults;
//   Sim.initialize(this)
// };
//
// Sim.defaults = {
//
//   // Default options for the carousel
//   loop: true,     // Бесконечное зацикливание слайдера
//   arrows: true,   // Пролистывание стрелками
// };
//
// Sim.prototype.elemPrev = function(num) {
//   num = num || 1;
//
//   let prevElement = this.currentElement;
//   this.currentElement -= num;
//   if(this.currentElement < 0) this.currentElement = this.elemCount-1;
//
//   if(!this.options.loop) {
//     if(this.currentElement === 0) {
//       this.leftArrow.style.display = 'none'
//     };
//     this.rightArrow.style.display = 'block'
//   };
//
//   this.sldrElements[this.currentElement].style.opacity = '1';
//   this.sldrElements[prevElement].style.opacity = '0';
//
// };

showCards(allCards);



