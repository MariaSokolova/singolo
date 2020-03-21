//-------Scroll-------------------

const navigation = document.getElementById('navigation');
let avgHeight = 0;
const sections = document.querySelectorAll('section');

sections.forEach(el => {
  avgHeight += el.offsetHeight;
});

let ScrollOffset = document.documentElement.clientHeight - parseInt(avgHeight / sections.length);
ScrollOffset = (ScrollOffset < 30) ? document.querySelector('header').offsetHeight : ScrollOffset;

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const currentPosition = window.scrollY + ScrollOffset;
  const divs = document.querySelectorAll('#wrapper>section');
  const links = document.querySelectorAll('#navigation a');

  divs.forEach((el) => {
    if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight - 60) > currentPosition) {
      links.forEach((a) => {
        a.classList.remove(('navigation__active'));
        if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add(('navigation__active'));
        }
      })
    }
  });

  if (document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
    navigation.querySelector('a.navigation__active').classList.remove('navigation__active');
    links[links.length - 1].classList.add('navigation__active');
  }
}

//-------Form, Modal window-------------------

const button = document.getElementById('button');
const closeButton = document.getElementById('close-btn');

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

//-------Переключение слайдов-------------------

let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('slider__active', direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('slider__active');
    isEnabled = true;
  });
}

function nextItem(n) {
  console.log('nextItem', n);
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

function previousItem(n) {
  console.log('previousItem', n);
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

const leftArrow = document.querySelector('.slider__control_left');
const rightArrow = document.querySelector('.slider__control_right');

leftArrow.addEventListener('click', function () {
  console.log('leftArrow');
  if (isEnabled) {
    previousItem(currentItem);
  }
});

rightArrow.addEventListener('click', function () {
  console.log('rightArrow');
  if (isEnabled) {
    nextItem(currentItem);
  }
});

//--------Активация экранов телефонов----------------------------

const horizontalPhone = document.getElementsByClassName('phone__horizontal_click')[0];
const horizontalScreen = document.getElementsByClassName('horizontal-screen')[0];
const verticalPhone = document.getElementsByClassName('phone__vertical_click')[0];
const verticalScreen = document.getElementsByClassName('vertical-screen')[0];

horizontalPhone.addEventListener('click', (event) => {
  document.getElementsByClassName('horizontal-screen')[0].classList.toggle('hidden-screen');
});

horizontalScreen.addEventListener('click', (event) => {
  document.getElementsByClassName('horizontal-screen')[0].classList.toggle('hidden-screen');
});

verticalPhone.addEventListener('click', () => {
  document.getElementsByClassName('vertical-screen')[0].classList.toggle('hidden-screen');
});

verticalScreen.addEventListener('click', () => {
  document.getElementsByClassName('vertical-screen')[0].classList.toggle('hidden-screen');
});


//------Portfolio. Переключение табов------------

const gallery = document.getElementById('gallery');
const allButton = document.getElementById('all');
const webButton = document.getElementById('web');
const artButton = document.getElementById('art');
const graphicButton = document.getElementById('graphic');
const allCards = [
  { path: 'assets/portfolio/01.png', name: 'Image01' },
  { path: 'assets/portfolio/02.png', name: 'Image02' },
  { path: 'assets/portfolio/03.png', name: 'Image03' },
  { path: 'assets/portfolio/04.png', name: 'Image04' },
  { path: 'assets/portfolio/05.png', name: 'Image05' },
  { path: 'assets/portfolio/06.png', name: 'Image06' },
  { path: 'assets/portfolio/07.png', name: 'Image07' },
  { path: 'assets/portfolio/08.png', name: 'Image08' },
  { path: 'assets/portfolio/09.png', name: 'Image09' },
  { path: 'assets/portfolio/10.png', name: 'Image10' },
  { path: 'assets/portfolio/11.png', name: 'Image11' },
  { path: 'assets/portfolio/12.png', name: 'Image12' }
];

const webCards = [
  { path: 'assets/portfolio/03.png', name: 'Image03' },
  { path: 'assets/portfolio/04.png', name: 'Image04' },
  { path: 'assets/portfolio/05.png', name: 'Image05' },
  { path: 'assets/portfolio/06.png', name: 'Image06' },
  { path: 'assets/portfolio/07.png', name: 'Image07' },
  { path: 'assets/portfolio/08.png', name: 'Image08' },
  { path: 'assets/portfolio/09.png', name: 'Image09' },
  { path: 'assets/portfolio/10.png', name: 'Image10' },
  { path: 'assets/portfolio/11.png', name: 'Image11' },
  { path: 'assets/portfolio/12.png', name: 'Image12' },
  { path: 'assets/portfolio/01.png', name: 'Image01' },
  { path: 'assets/portfolio/02.png', name: 'Image02' }
];

const artCards = [
  { path: 'assets/portfolio/05.png', name: 'Image05' },
  { path: 'assets/portfolio/06.png', name: 'Image06' },
  { path: 'assets/portfolio/07.png', name: 'Image07' },
  { path: 'assets/portfolio/08.png', name: 'Image08' },
  { path: 'assets/portfolio/09.png', name: 'Image09' },
  { path: 'assets/portfolio/10.png', name: 'Image10' },
  { path: 'assets/portfolio/11.png', name: 'Image11' },
  { path: 'assets/portfolio/12.png', name: 'Image12' },
  { path: 'assets/portfolio/01.png', name: 'Image01' },
  { path: 'assets/portfolio/02.png', name: 'Image02' },
  { path: 'assets/portfolio/03.png', name: 'Image03' },
  { path: 'assets/portfolio/04.png', name: 'Image04' }
];

const graphicCards = [
  { path: 'assets/portfolio/07.png', name: 'Image07' },
  { path: 'assets/portfolio/08.png', name: 'Image08' },
  { path: 'assets/portfolio/09.png', name: 'Image09' },
  { path: 'assets/portfolio/10.png', name: 'Image10' },
  { path: 'assets/portfolio/11.png', name: 'Image11' },
  { path: 'assets/portfolio/12.png', name: 'Image12' },
  { path: 'assets/portfolio/01.png', name: 'Image01' },
  { path: 'assets/portfolio/02.png', name: 'Image02' },
  { path: 'assets/portfolio/03.png', name: 'Image03' },
  { path: 'assets/portfolio/04.png', name: 'Image04' },
  { path: 'assets/portfolio/05.png', name: 'Image05' },
  { path: 'assets/portfolio/06.png', name: 'Image06' }
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
      el.firstChild.classList.remove('portfolio__column_bordered')
    });
  event.target.classList.add('portfolio__column_bordered');
});

showCards(allCards);
