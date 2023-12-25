const X_CLASS = 'X'
const O_CLASS = 'O'
const cellElements = document.querySelectorAll('[data-cell]')

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
    
}