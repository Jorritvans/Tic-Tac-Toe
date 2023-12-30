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
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('gameboard');
const restartBtn = document.getElementById('restartBtn');
const modeSelect = document.getElementById('gameMode');
let OTurn;
let computerMoveTimeout;
let firstMoveMade = false;

startGame();

function startGame() {
    OTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    if (!OTurn && modeSelect.value === 'playerVsComputer' && !firstMoveMade) {
        computerMoveTimeout = setTimeout(computerMove, 800);
    }
}

function computerMove() {
    const availableCells = [...cellElements].filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS));

    
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        const winningMove = findWinningMove(a, b, c, O_CLASS);
        if (winningMove !== undefined && availableCells.includes(winningMove)) {
            placeMark(winningMove, O_CLASS);
            endGame(false);
            return;
        }
    }

    
    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const computerCell = availableCells[randomIndex];
    placeMark(computerCell, O_CLASS);

    if (checkWin(O_CLASS)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function findWinningMove(a, b, c, playerClass) {
    const elements = [cellElements[a], cellElements[b], cellElements[c]];

    if (elements.filter(element => element.classList.contains(playerClass)).length === 2 &&
        elements.some(element => !element.classList.contains(X_CLASS) && !element.classList.contains(O_CLASS))) {
        return elements.find(element => !element.classList.contains(X_CLASS) && !element.classList.contains(O_CLASS));
    }

    return undefined;
}

function handleClick(e) {
    const cell = e.target;
    placeMark(cell, X_CLASS);
    firstMoveMade = true;

    if (checkWin(X_CLASS)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();

        
        clearTimeout(computerMoveTimeout);

    
        if (modeSelect.value === 'playerVsComputer' && !OTurn && firstMoveMade) {
            computerMoveTimeout = setTimeout(computerMove, 800);
        }
    }
}


function endGame(draw) {
    const resultMessage = document.getElementById('resultMessage');
    if (draw) {
        resultMessage.textContent = 'The game is a draw!';
    } else {
        resultMessage.textContent = OTurn ? 'Player X has won!' : 'Player O has won!';
    }
    document.getElementById('notification').classList.remove('hidden');
    document.getElementById('info').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) && cell.classList.contains(O_CLASS);
    });
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

function swapTurns() {
    OTurn = !OTurn;
}

function setBoardHoverClass() {
    board.classList.remove(X_CLASS, O_CLASS);

    if (OTurn) {
        board.classList.add(X_CLASS);
    } else {
        board.classList.add(O_CLASS);
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

restartBtn.addEventListener('click', () => {
    firstMoveMade = false;
    startGame();
});

document.getElementById('restartNotificationBtn').addEventListener('click', handleRestart);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        handleRestart();
    }
});

function handleStartGame() {
    startGame();
    firstMoveMade = false;
}

function handleRestart() {
    document.getElementById('notification').classList.add('hidden');
    document.getElementById('info').classList.remove('hidden');
    document.getElementById('options').classList.remove('hidden');
    clearTimeout(computerMoveTimeout);
    startGame();
    const selectedMode = document.getElementById('gameMode').value;
    if (selectedMode === 'playerVsComputer' && !OTurn && firstMoveMade) {
        computerMove();
    }
}