function showCards(arr) {
  const wrapper = document.getElementById('wrapper');

  let cards = ''
  arr.forEach(el => {
    cards += `<div class="portfolio__column">
          <img src="${el.path}" alt="${el.name}" width="220" height="187">
        </div>`
  })

  wrapper.innerHTML = cards;
}

const allButton = document.getElementById('all');
const webButton = document.getElementById('web');
const allCards = [
  {path: 'assets/portfolio/01.png', name: 'Image01'},
  {path: 'assets/portfolio/02.png', name: 'Image02'},
  {path: 'assets/portfolio/03.png', name: 'Image03'},
];
const webCards = [
  {path: 'assets/portfolio/04.png', name: 'Image04'},
  {path: 'assets/portfolio/05.png', name: 'Image05'},
  {path: 'assets/portfolio/06.png', name: 'Image06'},
];

allButton.addEventListener('click', () => showCards(allCards));
webButton.addEventListener('click', () => showCards(webCards));

showCards(allCards);
