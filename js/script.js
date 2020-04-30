const gameOptions = document.querySelectorAll('.play-button');
gameOptions.forEach(el => el.addEventListener('click', event => {
  console.log(el.id);
  playGame(el.id);
}));

let button = document.getElementById('restart-button');
button.addEventListener('click', function(){
    gameRestart();
});
