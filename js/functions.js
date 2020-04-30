function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerScore = 0;
let computerScore = 0;

function playGame(player){
    let computer = getRandomMove();
    let result = getResult(player, computer);
    player = translateValue(player);
    computer = translateValue(computer);
    document.getElementById('buttons').style.display = 'none';
    printMessage('<p>Ty zagrałeś <strong>' + player + '</strong></p> <p>Komputer zagrał <strong>' + computer + '</strong></p>'); 
    if (result == 0) {
        printMessage('<p>Mamy remis! Zagraj jeszcze raz.</p>');
    } else if (result == 1) {
        playerScore++;
        document.getElementById('result-player').innerHTML = playerScore;
        printMessage('<h1><strong>Wygrywasz!</strong></h1>');
    } else if (result == 2) {
        computerScore++;
        document.getElementById('result-computer').innerHTML = computerScore;
        printMessage('<p>Wygrywa komputer. Próbuj dalej!</p>');
    } else if (result == 99) {
        printMessage('Błąd gry! Spróbuj ponownie.');
    } else {
        printMessage('<h1>Wygrywa <strong>' + result + '!</strong></h1>');
    }

};




function translateValue(gameInput) {
    if (gameInput=='stone') {
        return 'kamień';
    } else if (gameInput=='paper') {
        return 'papier';
    } else if (gameInput=='scissors') {
        return 'nożyczki';
    } else {
        return 99;
    }
}

function getRandomMove() {
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;  
    if (randomNumber==1) {
        return 'stone';
    } else if (randomNumber==2) {
        return 'paper';
    } else if (randomNumber==3) {
        return 'scissors';
    } else {
        return 99;
    }  
}

function getResult(player, computer) {
    document.getElementById('restart').style.display = 'block';
    if (player == 'stone') {
        if (computer == 'stone') {
            return 0;
        } else if (computer == 'paper') {
            return 2;
        } else if (computer == 'scissors') {
            return 1;
        } else {
            return 99;
        }
    } else if (player == 'paper') {
        if (computer == 'stone') {
            return 1;
        } else if (computer == 'paper') {
            return 0;
        } else if (computer == 'scissors') {
            return 2;
        } else {
            return 99;
        }

    } else if (player == 'scissors') {
        if (computer == 'stone') {
            return 2;
        } else if (computer == 'paper') {
            return 1;
        } else if (computer == 'scissors') {
            return 0;
        } else {
            return 99;
        }
    } else {
        return 99;
    }
}

function gameRestart() {
    event.preventDefault();
    clearMessages();
    gameState=0;
    document.getElementById('restart').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
}

let gameState=0;
document.addEventListener('keydown', logKey);
function logKey(e) {

    switch(e.code) {
        case 'Digit1':
            playGame('stone');
            gameState=1;
            break;
        case 'Digit2':
            playGame('paper');
            gameState=1;
            break;
        case 'Digit3':
            playGame('scissors');
            gameState=1;
            break;
        case 'KeyR':
            gameRestart();
    }
    
}