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
    const selectedMode = document.getElementById('gameMode').value;
    OTurn = selectedMode === 'playerVsPlayer' ? true : false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener('click', handleClickPlayerVsPlayer);
        cell.removeEventListener('click', handleClickPlayerVsComputer);
        cell.addEventListener('click', modeSelect.value === 'playerVsComputer' ? handleClickPlayerVsComputer : handleClickPlayerVsPlayer, { once: true });
    });
    setBoardHoverClass();

    if (selectedMode === 'playerVsComputer' && !firstMoveMade) {
        computerMoveTimeout = setTimeout(computerMove, 800);
    }
}

function computerMove() {
    const playerClass = X_CLASS;
    const computerClass = O_CLASS;
    const availableCells = [...cellElements].filter(cell => !cell.classList.contains(X_CLASS) && !cell.classList.contains(O_CLASS));

    
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

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const computerCell = availableCells[randomIndex];
    makeComputerMove(computerCell, computerClass);
}

function makeComputerMove(cell, computerClass) {
    placeMark(cell, computerClass);

    if (checkWin(computerClass)) {
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
    const opponentClass = playerClass === X_CLASS ? O_CLASS : X_CLASS;

    const playerCount = elements.filter(element => element.classList.contains(playerClass)).length;
    const opponentCount = elements.filter(element => element.classList.contains(opponentClass)).length;

    if (playerCount === 2 && opponentCount === 0) {
        return elements.find(element => !element.classList.contains(X_CLASS) && !element.classList.contains(O_CLASS));
    }

    return undefined;
}

function handleClickPlayerVsPlayer(e) {
    const cell = e.target;
    placeMark(cell, OTurn ? X_CLASS : O_CLASS);

    if (checkWin(X_CLASS) || checkWin(O_CLASS)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function handleClickPlayerVsComputer(e) {
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
        resultMessage.textContent = 'THE GAME IS A DRAW!';
    } else {
        resultMessage.textContent = OTurn ? 'PLAYER X HAS WON!' : 'PLAYER O HAS WON!';
    }
    document.getElementById('notification').classList.remove('hidden');
    document.getElementById('info').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
}

function isDraw() {
    const drawCondition = [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
    });
    return drawCondition;
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

document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const infoParagraph = document.getElementById('info');
    infoParagraph.style.display = 'none';
    dropdownBtn.addEventListener('click', function () {
        infoParagraph.style.display = infoParagraph.style.display === 'none' ? 'block' : 'none';
        dropdownBtn.innerHTML = infoParagraph.style.display === 'none' ? 'INFORMATION &#9662;' : 'INFORMATION &#9652;';
    });
});