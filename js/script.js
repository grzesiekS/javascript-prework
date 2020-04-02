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
    //Funkcja zmieniająca input w zależności od wyboru gracza
    function changeResultCheat(argPlayerInput) {
        let rndNumberCheat = Math.floor(Math.random() * 100 + 1);
        //w zależności od wylosowanej liczby zostaje zminiona wartość wybrana przez koputer
        //przy liczbie mniejszej od 0.75 input komputera zostaje podmieniony
        if (rndNumberCheat <= 75) {
            if (argPlayerInput == 1) {
                return 3;
            } else if (argPlayerInput == 2) {
                return 1;
            } else {
                return 2;
            }
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
//automatyczne uruchamianie gry
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

randomStart(0,0);
