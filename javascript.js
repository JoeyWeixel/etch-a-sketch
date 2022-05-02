function createGrid(n){
    let grid = document.querySelector('.grid');
    removeChildren(grid);
    for(let i=0; i<n; i++){
        let row = document.createElement('div');
        let side = 100/n;
        row.style.height = `${side}` + '%'
        row.classList.add('row');
        for(let j=0; j<n; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            console.log(`${side}` + '%')
            square.style.width = `${side}` + '%'
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', hover));
    return;
}

function hover(e){
    this.classList.add('hover');
}

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    return;
}

function newGrid(){
    let n = prompt("Enter new grid size");
    if(n>100 || n<=0) return;
    createGrid(n);
    return;
}

createGrid(16);

const button = document.querySelector('button');
button.addEventListener('click', newGrid);

