const navigation = document.getElementById('navigation');

navigation.addEventListener('click', (event) => {
  navigation.querySelectorAll('a')
    .forEach(el => el.classList.remove('navigation__active'));
  event.target.classList.add('navigation__active');
});




