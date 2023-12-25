const X_CLASS = 'X'
const O_CLASS = 'O'
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