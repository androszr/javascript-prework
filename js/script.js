let computerMove = 'kamień';
let playerMove = 'papier';

let result = '';

if (computerMove == 'kamień' && playerMove == 'papier') {
    result = '<strong>Wygrywasz!</strong>';
}

printMessage('Zagrałem ' + computerMove + '! Twój ruch to ' + playerMove + '! ' + result);