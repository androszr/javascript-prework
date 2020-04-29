function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function assignValue(gameInput) {
    if (gameInput==1) {
        return 'kamień';
    } else if (gameInput==2) {
        return 'papier';
    } else if (gameInput==3) {
        return 'nożyce';
    } else {
        return 'error';
    }
}

function getRandomNumber() {
    let randomNumber = 0;
    let computerMove = '';
    randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;    
    return(assignValue(randomNumber));
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
    return(assignValue(playerInput));
}

function getResult(player, computer) {
    let result = '';
    document.getElementById('restart').style.display = 'block';
    if (player == 'kamień') {
        if (computer == 'kamień') {
            return 'remis';
        } else if (computer == 'papier') {
            return 'Komputer';
        } else if (computer == 'nożyce') {
            return 'Gracz';
        } else {
            return 'error';
        }
    } else if (player == 'papier') {
        if (computer == 'kamień') {
            return 'Gracz';
        } else if (computer == 'papier') {
            return 'remis';
        } else if (computer == 'nożyce') {
            return 'Komputer';
        } else {
            return 'error';
        }

    } else if (player == 'nożyce') {
        if (computer == 'kamień') {
            return 'Komputer';
        } else if (computer == 'papier') {
            return 'Gracz';
        } else if (computer == 'nożyce') {
            return 'remis';
        } else {
            return 'error';
        }
    } else {
        return 'error';
    }
}

let button = document.getElementById('restart-button');
button.addEventListener('click',function(e){
    button.disabled = 'true';
    location.reload();
},false);