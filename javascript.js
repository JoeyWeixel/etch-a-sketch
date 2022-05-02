function createGrid(n){
    let container = document.querySelector('.grid');
    for(let i=0; i<n*n; i++){
        let square = document.createElement('div');
        //square.setAttribute('id', 'square' + i)
        square.classList.add('square');
        container.appendChild(square);
    }
}