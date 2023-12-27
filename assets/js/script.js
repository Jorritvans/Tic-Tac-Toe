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
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
let OTurn = false;

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
    winningMessageElement.classList.remove("show");
    if (!OTurn) {
        computerMove();
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


function handleClick(e) {
    const cell = e.target;
    const currentClass = OTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();

        if (!OTurn) {
            setTimeout(computerMove, 600);
        }
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${OTurn ? "O's" : "X's"} Wins!`;
    }
    winningMessageTextElement.classList.add("show");
}

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(O_CLASS);
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
    board.classList.add(OTurn ? O_CLASS : X_CLASS);
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        });
    });
}

restartButton.addEventListener('click', startGame);