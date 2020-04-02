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
        } else {
            if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argPlayerMove == argComputerMove) {
                printMessage('Remis!');
            } else {
                printMessage('Ja wygrywam!');
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

    displayResult(computerMove, playerMove);
}

let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

rockButton.addEventListener('click', function() {
    playGame(1);
});

paperButton.addEventListener('click', function() {
    playGame(2);
});

scissorsButton.addEventListener('click', function() {
    playGame(3);
});