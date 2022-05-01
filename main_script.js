// Build the grid
// Create a function to draw when the user clicks AND drags on the screen,
// but doesn't draw when they are not clicking
// Create functions to change the width and the height of the playboard
// Create a function to allow the user to change colors to any color
// Create a function for a random color

function createBoard(size) {
    const board = document.querySelector('.gridContainer');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;



    let gridSize = size*size;

    for (let i = 0; i <= gridSize; i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.appendChild(square);
        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = 'black';
        });
    }
}

createBoard(4);