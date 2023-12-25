const X_CLASS = 'X'
const O_CLASS = 'O'
const cellElements = document.querySelectorAll('[data-cell]')
let OTurn

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
    const cell = e.target
    const currentClass = OTurn ? O_CLASS : X_CLASS
}