function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getRandomNumber() {
    let randomNumber = 0;
    let computerMove = '';
    randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (randomNumber==1) {
        computerMove = 'kamień';
    } else if (randomNumber==2) {
        computerMove = 'papier';
    } else if (randomNumber==3) {
        computerMove = 'nożyce';
    } else {
        computerMove = 'error';
    }
    return(computerMove);
}

function getPlayerNumber() {
    let msg = '';
    let playerInput = '';
    while (playerInput !== '1' && playerInput !== '2' && playerInput !== '3') {
        if (playerInput=='') {
            msg ='Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.';
        } else {
            alert('Błędnie wpisany ruch! Wpisano: ' + playerInput + '.');
            msg='Spróbuj ponownie 1: kamień, 2: papier, 3: nożyce.'
        };
       playerInput = prompt(msg);
    }
    if (playerInput == '1') {
        playerInput = 'kamień';
    } else if (playerInput == '2') {
        playerInput = 'papier';
    } else if (playerInput == '3') {
        playerInput = 'nożyce';
    } else {   
        playerInput = 'error';
    }
    return(playerInput);
}

function getResult() {
    let result = '';
    if (playerInput == 'kamień') {
        if (computerMove == 'kamień') {
            result = 'remis';
        } else if (computerMove == 'papier') {
            result = 'Komputer';
        } else if (computerMove == 'nożyce') {
            result = 'Gracz';
        } else {
            result = 'error';
        }
    } else if (playerInput == 'papier') {
        if (computerMove == 'kamień') {
            result = 'Gracz';
        } else if (computerMove == 'papier') {
            result = 'remis';
        } else if (computerMove == 'nożyce') {
            result = 'Komputer';
        } else {
            result = 'error';
        }

    } else if (playerInput == 'nożyce') {
        if (computerMove == 'kamień') {
            result = 'Komputer';
        } else if (computerMove == 'papier') {
            result = 'Gracz';
        } else if (computerMove == 'nożyce') {
            result = 'remis';
        } else {
            result = 'error';
        }
    } else {
        result = 'error';
    }
    return(result);
}