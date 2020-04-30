const gameOptions = document.querySelectorAll('.play-button');
gameOptions.forEach(el => el.addEventListener('click', event => {
  console.log(el.id);
  playGame(el.id);
}));

