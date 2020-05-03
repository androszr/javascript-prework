let playerScore = 0;
let computerScore = 0;
let gameState=0;

const translate = {
    stone: 'kamień',
    paper: 'papier',
    scissors: 'nożyczki'
}

const checkBox = document.getElementById("cheat-toggle");
checkBox.addEventListener( 'change', function() {
    computer = getRandomMove();
    toggleCheat();
});

let computer = getRandomMove();
toggleCheat();

function toggleCheat() {
    if (checkBox.checked == true) {
        cheatMode(computer);
    } else { 
        document.getElementById('header-photo').style.backgroundImage = "url('../images/background-3.png')"; 
    }
}

function cheatMode(computer) {
    switch(computer) {
        case Object.keys(translate)[0]:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-paper.png')";
            break;
        case Object.keys(translate)[1]:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-scissors.png')";
            break;
        case Object.keys(translate)[2]:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-stone.png')";
            break;
    }
}

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


function playGame(player){
    let result = getResult(player, computer);
    player = translateValue(player);
    computer = translateValue(computer);
    document.getElementById('buttons').style.display = 'none';
    printMessage('<p>Ty zagrałeś <strong>' + player + '</strong></p> <p>Komputer zagrał <strong>' + computer + '</strong></p>'); 
    switch(result) {
        case 0:
            printMessage('<p>Mamy remis! Zagraj jeszcze raz.</p>');
            break;
        case 1:
            playerScore++;
            document.getElementById('result-player').innerHTML = playerScore;
            printMessage('<h1><strong>Wygrywasz!</strong></h1>');
            break;
        case 2:
            computerScore++;
            document.getElementById('result-computer').innerHTML = computerScore;
            printMessage('<p>Wygrywa komputer. Próbuj dalej!</p>');
            break;
    }
};



function translateValue(gameInput) {
    try {
        return translate[gameInput];
    }
    catch(error) {
        console.log(error);
    } 
}

function getRandomMove() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
    
    switch(randomNumber) {
        case 1:
            return Object.keys(translate)[0];
        case 2:
            return Object.keys(translate)[1];
        case 3:
            return Object.keys(translate)[2];
    }
    
}

function getResult(player, computer) {
    document.getElementById('restart').style.display = 'block';

    switch(player) {
        case Object.keys(translate)[0]:
            switch(computer) {
                case Object.keys(translate)[0]:
                    return 0;
                case Object.keys(translate)[1]:
                    return 2;
                case Object.keys(translate)[2]:
                    return 1;
            }

        case Object.keys(translate)[1]:
            switch(computer) {
                case Object.keys(translate)[0]:
                    return 1;

                case Object.keys(translate)[1]:
                    return 0;

                case Object.keys(translate)[2]:
                    return 2
            }

        case Object.keys(translate)[2]:
            switch(computer) {
                case Object.keys(translate)[0]:
                    return 2;

                case Object.keys(translate)[1]:
                    return 1;

                case Object.keys(translate)[2]:
                    return 0;
            }
    }

}

function gameRestart() {
    event.preventDefault();
    clearMessages();
    gameState=0;
    document.getElementById('restart').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
    computer = getRandomMove();
    toggleCheat()
}


document.addEventListener('keydown', logKey);
function logKey(e) {
    if (gameState==1) {
        switch(e.which) {
            case 82:
                gameRestart();
        }
    } else {
        switch(e.which) {
            case 49:
                playGame(Object.keys(translate)[0]);
                gameState=1;
                break;
            case 50:
                playGame(Object.keys(translate)[1]);
                gameState=1;
                break;
            case 51:
                playGame(Object.keys(translate)[2]);
                gameState=1;
                break;
        }
    }     
}