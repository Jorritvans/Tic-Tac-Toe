const X_CLASS = 'X'
const O_CLASS = 'O'
const WINNING_COMBINATIONS = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const gameBoard = document.getElementById('gameboard')
let OTurn

startGame()

function startGame () {
    OTurn = false
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    })
    setGameBoardHoverClass()
}

function handleClick(e) {
    const cell = e.target
    const currentClass = OTurn ? O_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        console.log('winner')
    }
    swapTurns()
    setGameBoardHoverClass()
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass)
}

function swapTurns() {
    OTurn = !OTurn 
}

function setGameBoardHoverClass() {
    gameBoard.classList.remove(X_CLASS)
    gameBoard.classList.remove(O_CLASS)
    if (OTurn) {
        gameBoard.classlist.add(O_CLASS)
    } else {
        gameBoard.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}