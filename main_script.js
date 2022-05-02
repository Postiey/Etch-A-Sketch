// Build the grid
// Create a function to draw when the user clicks AND drags on the screen,
// but doesn't draw when they are not clicking
// Create functions to change the width and the height of the playboard
// Create a function to allow the user to change colors to any color
// Create a function for a random color
const buttons = document.querySelectorAll('.btn');

function buttonListener(value) {
    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            if (btn.innerText === 'Rainbow') {
                let newValue = value;
                newValue.style.backgroundColor = `rgb(${randRainColor()}, ${randRainColor()}, ${randRainColor()})`;
            }
        });
    });
}

buttonListener();


function createBoard(size) {
    const board = document.querySelector('.gridContainer');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size*size;

    for (let i = 0; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'lightgray';
        board.appendChild(square);

        buttonListener('square');

    }
};

// Creates a random rainbow color when the user drags their mouse over boxes.
function randRainColor() {
    let randNum = Math.floor(Math.random() * 255);
    return randNum;
}

// Creates a greyscale pattern with an array of colors
function randomGreyScale() {
    let greyCodes = ['525252', '7A7A7A', 'D6D6D6', '000', '292929'];
    let randNum = Math.floor(Math.random() * 5);
    let newNumber = greyCodes[randNum];
    let colorCode = "#" + newNumber;
    return colorCode;  
}





createBoard(10);