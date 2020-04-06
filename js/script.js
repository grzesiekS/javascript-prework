let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

let playerScore = 0;
let computerScore = 0;

function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }

        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult(argComputerMove, argPlayerMove) {
        if (argPlayerMove == 'nieznany ruch') {
            printMessage('Nie wybrałeś właściwego ruchu!');
            return 'error';
        } else {
            if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
                return 'wygrana';
            } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                return 'wygrana';
            } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
                printMessage('Ty wygrywasz!');
                return 'wygrana';
            } else if (argPlayerMove == argComputerMove) {
                printMessage('Remis!');
                return 'remis';
            } else {
                printMessage('Ja wygrywam!');
                return 'przegrana';
            }
        }
    }
    //Function changing computer input based on the player input
    function changeResultCheat(argPlayerInput) {
        let rndNumberCheat = Math.floor(Math.random() * 100 + 1);
        //depend on the random picked number the coputer input value will be changed
        //if the random number is equal or below 75 computer input value will be change (player will win)
        if (rndNumberCheat <= 75) {
            if (argPlayerInput == 1) {
                return 3;
            } else if (argPlayerInput == 2) {
                return 1;
            } else {
                return 2;
            }
        //if the random number is greater then 75 computer will win
        } else {
            if (argPlayerInput == 1) {
                return 2;
            } else if (argPlayerInput == 2) {
                return 3;
            } else {
                return 1;
            }
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber)

    let computerMove = getMoveName(randomNumber);

    /*if (randomNumber == 1) {
        computerMove = 'kamień';
    } else if (randomNumber == 2) {
        computerMove = 'papier';
    } else if (randomNumber == 3) {
        computerMove = 'nożyce';
    }*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    computerMove = getMoveName(changeResultCheat(playerInput));

    console.log('Zmieniona liczba komputera: ' + changeResultCheat(playerInput));

    printMessage('Mój ruch to: ' + computerMove);

    /*if (playerInput == '1') {
        playerMove = 'kamień';
    } else if (playerInput == '2') {
        playerMove = 'papier';
    } else if (playerInput == '3') {
        playerMove = 'nożyce';
    }*/

    printMessage('Twój ruch to: ' + playerMove);

    return displayResult(computerMove, playerMove);
}
//Automatically play n numbers of games
function randomStart(argPlayerScore, argComputerScore) {
    for(let i = 0; i < 1000; i++) {

        let randomNumber = Math.floor(Math.random() * 3 + 1);
        let gameScore = playGame(randomNumber);

        if (gameScore == 'wygrana') {
            argPlayerScore++;
        } else if (gameScore == 'przegrana') {
            argComputerScore++;
        }

        console.log(argPlayerScore, argComputerScore);
        console.log('Runda: ' + (i + 1));

        printResult(argPlayerScore, argComputerScore);
    }
}

function changeScoreBoard(argGameScore) {
    if (argGameScore == 'wygrana') {
        playerScore++;
    } else if (argGameScore == 'przegrana') {
        computerScore++;
    }

    console.log(playerScore, computerScore);

    printResult(playerScore, computerScore);
}

printResult(playerScore, computerScore);

rockButton.addEventListener('click', function() {
    let gameScore = playGame(1);
    changeScoreBoard(gameScore);
});

paperButton.addEventListener('click', function() {
    let gameScore = playGame(2);
    changeScoreBoard(gameScore);
});

scissorsButton.addEventListener('click', function() {
    let gameScore = playGame(3);
    changeScoreBoard(gameScore);
});

randomStart(0,0);
