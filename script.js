/* Create a 16x16 grid of square divs 
put grid inside a container
set up a hover effect that change colors when a mouse passes over them
*/
containerGrid = document.querySelector('.containerGrid')

let maxGrid = 17
let squareSize = 500 / maxGrid
grid(maxGrid)

let clearButton = document.querySelector('.clearButton')
clearButton.addEventListener('click', () => {
    removeGrid()
    grid(maxGrid)
})

let sizeButton = document.querySelector('.sizeButton')
sizeButton.addEventListener('click', () => {
    maxGrid = parseInt(prompt('Choose the size of Grid (.max 100)', ''))
    maxGrid += 1
    if (maxGrid < 17 || maxGrid > 101) {
        maxGrid = 17
    }
    removeGrid()
    grid(maxGrid)
});





function grid(size) {
    for (let i = 1; i < maxGrid; i++ ) {
        let columnDiv = document.createElement('div')
        columnDiv.classList.add('columnDiv')
        columnDiv.textContent = ''
        containerGrid.appendChild(columnDiv)
        for (let j = 1; j < maxGrid; j++) {
        let lineDiv = document.createElement('div')
        lineDiv.classList.add('lineDiv')
        let squareSize = (500 / size)
        lineDiv.style.cssText = `height: ${squareSize}px; width: ${squareSize}px;`
        lineDiv.addEventListener('dragover', () => {
            lineDiv.style.cssText = `background-color: black; height: ${squareSize}px; width: ${squareSize}px;`
        });
        columnDiv.appendChild(lineDiv)

        }

    }
}

function removeGrid() {
    document.querySelectorAll(".columnDiv").forEach(el => el.remove());
}
