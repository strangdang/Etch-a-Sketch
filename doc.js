const sizeOfGrid = 100;

const resetBtn = document.querySelector('button');
const container = document.querySelector('.container');
const color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
 

const makeGrid = (amtOfCells) => {
    const holder = document.createElement('div')
    holder.classList.add('holder')

    for (let i = 0; i < amtOfCells; i++) {
        const rows = document.createElement('div'); 
        rows.classList.add('grid-row')

        for (let j = 0; j < amtOfCells; j++) {
            const totalSize = 960 / amtOfCells
            const columns = document.createElement('div');
            columns.classList.add('grid-column')
            columns.style.width = `${totalSize}px`
            columns.style.height = `${totalSize}px`

            columns.addEventListener('mouseover', () => {
                columns.style.backgroundColor = 'black'
            })
            rows.appendChild(columns)
        }
        holder.appendChild(rows)
     }
     container.appendChild(holder)
}

resetBtn.addEventListener('click', () => {
    let userSize = Number(prompt('How many large do you want the grid?'))

    while (userSize < 0 || userSize > 100) {
        userSize = Number(prompt('Pick a number between 0 and 100'))
    }
    const holder = document.querySelector('.holder')
    if (!holder) {
        makeGrid(userSize)
    } else {
        holder.remove()
        makeGrid(userSize)
    }
})

makeGrid(sizeOfGrid)


   //// document.getElementsByClassName('.container').style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
//});



    

 