let playerScore = 0;
let computerScore = 0;
let gameState = 0;

const translatePL = {
    stone: 'kamień',
    paper: 'papier',
    scissors: 'nożyczki'
}

const gameOptionsEN = {
    stone: 'stone',
    paper: 'paper',
    scissors: 'scissors'
}

const getRandomMove = function() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;   
    switch(randomNumber) {
        case 1:
            return gameOptionsEN.stone;
        case 2:
            return gameOptionsEN.paper;
        case 3:
            return gameOptionsEN.scissors;
        default:
            console.log('Unable to generate random number code:' + randomNumber);
            break;
    }   
}

const checkBox = document.getElementById("cheat-toggle");
checkBox.addEventListener( 'change', function() {
    computer = getRandomMove();
    toggleCheat();
});

const toggleCheat = function() {
    if (checkBox.checked == true) {
        cheatMode(computer);
    } else { 
        document.getElementById('header-photo').style.backgroundImage = "url('../images/background-3.png')"; 
    }
}

let computer = getRandomMove();
toggleCheat();

const cheatMode = function(computer) {
    switch(computer) {
        case gameOptionsEN.stone:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-paper.png')";
            break;
        case gameOptionsEN.paper:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-scissors.png')";
            break;
        case gameOptionsEN.scissors:
            document.getElementById('header-photo').style.backgroundImage = "url('../images/background-stone.png')";
            break;
        default:
            console.log('Wrong variable content for computer:' + computer);
            break;
    }
}

const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}


const playGame = function(player){
    try {
        gameState = 1;
        const result = getResult(player, computer);
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
            default:
                console.log('Unable to retriev result code:' + result);
                break;
        }   
    }
    catch(error) {
        console.log(error);
    } 
};

const translateValue = function(gameInput) {
    if(gameInput) {
        return translatePL[gameInput];
    } else {
        throw('game input not defined');
    }
}

const getResult = function(player, computer) {
    
    try {
        document.getElementById('restart').style.display = 'block';  
        switch(player) {
            case gameOptionsEN.stone:
                switch(computer) {
                    case gameOptionsEN.stone:
                        return 0;
                    case gameOptionsEN.paper:
                        return 2;
                    case gameOptionsEN.scissors:
                        return 1;
                }
            case gameOptionsEN.paper:
                switch(computer) {
                    case gameOptionsEN.stone:
                        return 1;
    
                    case gameOptionsEN.paper:
                        return 0;
    
                    case gameOptionsEN.scissors:
                        return 2
                }
    
            case gameOptionsEN.scissors:
                switch(computer) {
                    case gameOptionsEN.stone:
                        return 2;
    
                    case gameOptionsEN.paper:
                        return 1;
    
                    case gameOptionsEN.scissors:
                        return 0;
                }
        }
    }
    catch(error) {
        console.log(error);
    }   
}

const gameRestart =  function() {
    event.preventDefault();
    clearMessages();
    gameState=0;
    document.getElementById('restart').style.display = 'none';
    document.getElementById('buttons').style.display = 'block';
    computer = getRandomMove();
    toggleCheat()
}

const logKey = function(e) {
    try {
        if (gameState == 1) {
            switch(e.which) {
                case 82:
                    gameRestart();
            }
        } else {
            switch(e.which) {
                case 49:
                    playGame(gameOptionsEN.stone);
                    gameState=1;
                    break;
                case 50:
                    playGame(gameOptionsEN.paper);
                    gameState=1;
                    break;
                case 51:
                    playGame(gameOptionsEN.scissors);
                    gameState=1;
                    break;
            }
        }        
    }
    catch(error) {
        console.log(error);
    } 
}

document.addEventListener('keydown', logKey);