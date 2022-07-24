/* Create a 16x16 grid of square divs 
put grid inside a container
set up a hover effect that change colors when a mouse passes over them
*/
containerGrid = document.querySelector('.containerGrid')
for (let i = 1; i < 17; i++ ) {
    let columnDiv = document.createElement('div')
    columnDiv.classList.add('columnDiv')
    columnDiv.textContent = ''
    containerGrid.appendChild(columnDiv)
    for (let j = 1; j < 17; j++) {
     let lineDiv = document.createElement('div')
     lineDiv.textContent = ''
     lineDiv.classList.add('lineDiv')
     lineDiv.addEventListener('mouseover', () => {
        lineDiv.style.cssText = 'background-color: red;'
     });
     columnDiv.appendChild(lineDiv)

    }

}