/**  Constants representing X and O classes, and winning combinations */
const X_CLASS = 'X';
const O_CLASS = 'O';
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/**  DOM elements */
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('gameboard');
const restartBtn = document.getElementById('restartBtn');
const modeSelect = document.getElementById('gameMode');

/** Game state variables */
let oTurn;
let computerMoveTimeout;
let firstMoveMade = false;
let gameInProgress = true;

/** Initialize the game */
startGame();

/** Initialize dropdown button */
initDropdownButton();


/** event listener restart */
restartBtn.addEventListener('click', handleRestart);
document.getElementById('restartNotificationBtn').addEventListener('click', handleRestart);
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleRestart();
    }
});


/** Function to initialize the dropdown button */
function initDropdownButton() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const infoParagraph = document.getElementById('info');
    infoParagraph.style.display = 'none';
    dropdownBtn.addEventListener('click', function () {
        infoParagraph.style.display = infoParagraph.style.display === 'none' ? 'block' : 'none';
        dropdownBtn.innerHTML = infoParagraph.style.display === 'none' ? 'INFORMATION &#9662;' : 'INFORMATION &#9652;';
    });
};


/** Function to initialize the game */
function startGame() {
    const selectedMode = document.getElementById('gameMode').value;

    /** Determine if it's player vs player or player vs computer */
    oTurn = selectedMode === 'playerVsPlayer' ? true : false;

    /** Remove previous classes, event listeners, and add new ones */
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClickPlayerVsPlayer);
        cell.removeEventListener('click', handleClickPlayerVsComputer);
        cell.addEventListener('click', modeSelect.value === 'playerVsComputer' ? handleClickPlayerVsComputer : handleClickPlayerVsPlayer, { once: true });
    });

    /** Set initial hover class and handle first move for player vs computer */
    setBoardHoverClass();

    if (selectedMode === 'playerVsComputer' && !firstMoveMade) {
        computerMoveTimeout = setTimeout(computerMove, 800);
    }

    gameInProgress = true;
}


/** Function to handle computer's move */
function computerMove() {
    /** Player and computer class */
    const playerClass = X_CLASS;
    const computerClass = O_CLASS;

    /** Filter available cells */
    const availableCells = [...cellElements].filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS));

    /** Check for winning move or blocking move */
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        const potentialWinningMove = findWinningMove(a, b, c, computerClass);
        if (potentialWinningMove !== undefined && availableCells.includes(potentialWinningMove)) {
            makeComputerMove(potentialWinningMove, computerClass);
            return;
        }
    }

    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        const potentialBlockMove = findWinningMove(a, b, c, playerClass);
        if (potentialBlockMove !== undefined && availableCells.includes(potentialBlockMove)) {
            makeComputerMove(potentialBlockMove, computerClass);
            return;
        }
    }


    /** If no winning or blocking move, make a random move */
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const computerCell = availableCells[randomIndex];
    makeComputerMove(computerCell, computerClass);
}


/** Function to make the computer's move */
function makeComputerMove(cell, computerClass) {
    placeMark(cell, computerClass);

    /** Check for win or draw, swap turns, and set hover class */
    if (checkWin(computerClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}


/** Function to find a winning move or blocking move */
function findWinningMove(a, b, c, playerClass) {
    const elements = [cellElements[a], cellElements[b], cellElements[c]];
    const opponentClass = playerClass === X_CLASS ? O_CLASS : X_CLASS;

    const playerCount = elements.filter(element => element.classList.contains(playerClass)).length;
    const opponentCount = elements.filter(element => element.classList.contains(opponentClass)).length;

    if (playerCount === 2 && opponentCount === 0) {
        return elements.find(element => !element.classList.contains(X_CLASS) && !element.classList.contains(O_CLASS));
    }

    return undefined;
}


/** Function to handle click in player vs player mode*/
function handleClickPlayerVsPlayer(e) {
    if (!gameInProgress) return;
    const cell = e.target;
    placeMark(cell, oTurn ? X_CLASS : O_CLASS);


    /** Check for win or draw, swap turns, and set hover class */
    if (checkWin(X_CLASS) || checkWin(O_CLASS)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}


/** Function to handle click in player vs computer mode */
function handleClickPlayerVsComputer(e) {
    if (!gameInProgress) return;
    const cell = e.target;
    placeMark(cell, X_CLASS);
    firstMoveMade = true;

    /** Check for win or draw, swap turns, set hover class, and handle computer move */
    if (checkWin(X_CLASS)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();

        clearTimeout(computerMoveTimeout);

        if (modeSelect.value === 'playerVsComputer' && !oTurn && firstMoveMade) {
            computerMoveTimeout = setTimeout(computerMove, 800);
        }
    }
}


/** Function to end the game */
function endGame(draw) {
    const resultMessage = document.getElementById('resultMessage');
    if (draw) {
        resultMessage.textContent = 'THE GAME IS A DRAW!';
        resultMessage.style.fontSize = '24px';
        notification.style.backgroundColor = 'rgba(174, 39, 245, 0.8)';
    } else {
        resultMessage.textContent = oTurn ? 'PLAYER X HAS WON!' : 'PLAYER O HAS WON!';
        resultMessage.style.fontSize = '24px';
        notification.style.backgroundColor = oTurn ? 'rgb(0, 153, 255)' : 'rgb(80, 207, 80)';
    }
    document.getElementById('notification').classList.remove('hidden');
    document.getElementById('info').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');

    gameInProgress = false;
}


/** Function to check if the game is a draw */
function isDraw() {
    const drawCondition = [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    });
    return drawCondition;
}


/** Function to place a mark on the board*/
function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}


/** Function to swap turns */
function swapTurns() {
    oTurn = !oTurn;
}


/** Function to set the hover class on the board*/
function setBoardHoverClass() {
    board.classList.remove(X_CLASS, O_CLASS);

    if (oTurn) {
        board.classList.add(X_CLASS);
    } else {
        board.classList.add(O_CLASS);
    }
}


/** Function to check for a win */
function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}


/** Function to handle starting the game */
function handleRestart() {
    document.getElementById('notification').classList.add('hidden');
    document.getElementById('info').classList.remove('hidden');
    document.getElementById('options').classList.remove('hidden');
    clearTimeout(computerMoveTimeout);
    startGame();
    const selectedMode = document.getElementById('gameMode').value;
    if (selectedMode === 'playerVsComputer' && !oTurn && firstMoveMade) {
        computerMove();
    }
}