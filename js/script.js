{
    const gameOptions = document.querySelectorAll('.play-button');
    gameOptions.forEach(el => el.addEventListener('click', event => {
        playGame(el.id);
    }));
  
    const button = document.getElementById('restart-button');
    button.addEventListener('click', gameRestart);
  
}