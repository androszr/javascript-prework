let computerMove = getRandomNumber();
let playerInput = getPlayerNumber();
let result = getResult();

printMessage('<p>Ty zagrałeś <strong>' + playerInput + '</strong></p> <p>Komputer zagrał <strong>' + computerMove + '</strong></p>'); 
if (result == 'remis') {
    printMessage('Mamy remis! Zagraj jeszcze raz.');
} else if (result == 'error') {
    printMessage('Błąd gry! Spróbuj ponownie.');
} else {
    printMessage('<h1>Wygrywa <strong>' + result + '!</strong></h1>');
}
 
