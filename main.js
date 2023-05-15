let gridSize = 256
const container = document.querySelector('.sketch-container')
const sliderText = document.querySelector('.grid-size')
const slider = document.querySelector('.slider')
const resetButton = document.querySelector('.reset')

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let child = document.createElement('div')
        child.classList.add('square')
        container.appendChild(child)
    }
    colourIn()
}

function colourIn() {
    let allSquares = document.querySelectorAll('.square')
    allSquares.forEach(s => {
        s.addEventListener('mouseover', function(event) {
            s.classList.add('colouredIn')
        })
    })
}

function reset() {
    let allSquares = document.querySelectorAll('.square')
    allSquares.forEach(s => {
            s.classList.remove('colouredIn')
        })
}

slider.oninput = function () {
    sliderText.textContent = this.value +" X "+ this.value;
}

slider.onchange = function () {
    container.replaceChildren()
    gridSize = parseInt(slider.value)*parseInt(slider.value)
    container.setAttribute('style', `grid-template-columns: repeat(${slider.value}, auto);`)
    createGrid(gridSize)
}

resetButton.addEventListener('click', function() {
    reset()
})

createGrid()