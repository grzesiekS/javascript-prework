function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(playerScore, computerScore){
	let div = document.createElement('div');
	div.innerHTML = playerScore + ' - ' + computerScore;
	document.getElementById('result').appendChild(div);
}