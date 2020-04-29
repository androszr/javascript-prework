const gameOptions = document.querySelectorAll('.play-button');
let player = '';
gameOptions.forEach(el => el.addEventListener('click', event => {
  console.log(el.id);
  if (el.id == 'stone') {
    player = 'kamień';
  } else if (el.id == 'paper') {
    player = 'papier';
  } else if (el.id == 'scissors') {
    player = 'nożyce';
  }
  playGame(player);
}));

