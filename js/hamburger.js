const hamburger = document.querySelector('.hamburger');
const navigacijameni = document.querySelector('.navigacija-meni');

hamburger.addEventListener('click', function() {
  navigacijameni.classList.toggle('active');
});