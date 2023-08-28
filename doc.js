const sizeOfGrid = 16;

const ResetBtn = document.querySelector('button');
const container = document.querySelector('.container');
const color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
 

const makeGrid = (amtOfCells) => {
    for (let i = 0; i < amtOfCells; i++) {
        const rows = document.createElement('div');
        rows.classList.add('grid-row')

        for (let j = 0; j < amtOfCells; j++) {
            const totalSize = 960 / sizeOfGrid
            const columns = document.createElement('div');
            columns.classList.add('grid-column')
            columns.style.width = `${totalSize}px`
            columns.style.height = `${totalSize}px`
            rows.appendChild(columns)
        }
        container.appendChild(rows)
     }
}
makeGrid (sizeOfGrid)

//document.getElementsByClassName('.container').addEventListener("mouseover", (event) => {
   //// document.getElementsByClassName('.container').style.backgroundColor = color[(Math.floor(Math.random() * color.length))];
//});



    

 