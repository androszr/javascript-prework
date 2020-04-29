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
    } else {
        computerMove = 'nożyce';
    }
    return(computerMove);
}
