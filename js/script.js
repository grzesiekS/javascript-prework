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

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

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

let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

let playerScore = 0;
let computerScore = 0;

printResult(playerScore, computerScore);

rockButton.addEventListener('click', function() {
    let gameScore = playGame(1);
    if (gameScore == 'wygrana') {
        playerScore++;
    } else if (gameScore == 'przegrana') {
        computerScore++;
    }

    console.log(playerScore, computerScore);

    printResult(playerScore, computerScore);
});

paperButton.addEventListener('click', function() {
    let gameScore = playGame(2);
    if (gameScore == 'wygrana') {
        playerScore++;
    } else if (gameScore == 'przegrana') {
        computerScore++;
    }

    console.log(playerScore, computerScore);
    
    printResult(playerScore, computerScore);
});

scissorsButton.addEventListener('click', function() {
    let gameScore = playGame(3);
    if (gameScore == 'wygrana') {
        playerScore++;
    } else if (gameScore == 'przegrana') {
        computerScore++;
    }

    console.log(playerScore, computerScore);

    printResult(playerScore, computerScore);
});
