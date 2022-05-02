function createGrid(n){
    let grid = document.querySelector('.grid');
    for(let i=0; i<n; i++){
        let row = document.createElement('div');
        //square.setAttribute('id', 'square' + i)
        row.classList.add('row');
        for(let j=0; j<n; j++){
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function hover(e){
    this.classList.add('hover');
}

createGrid(16);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', hover));
