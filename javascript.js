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
    let width = grid.width;
    let squareSize = width/n;



}


createGrid(16);