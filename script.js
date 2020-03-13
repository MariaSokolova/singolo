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
  console.log('hello');
  document.getElementsByClassName('horizontal-screen')[0].classList.toggle('hidden-screen');
});
horizontalScreen.addEventListener('click', (event) => {
  console.log('hello');
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

//------Portfolio. Взаимодействие с картинками------------

// const image = document.getElementById()
















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





