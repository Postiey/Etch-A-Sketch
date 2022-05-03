// Etch-A-Sketch
// Made by Postiey :)


// To Do
// Implement color picking html input
// Clear grid function
  // Dropdown box for asking if the user really wants to clear the grid
// Allow users to choose a grid size
  // Dropdown box to choose what size they would like, between a couple of different options


const rainbowBtn = document.querySelector('.rainbow');
const greyScaleBtn = document.querySelector('.greyscale');
const clearBtn = document.querySelector('.resetGrid');
let rainbow = false;
let greyScale = false;
let boardClear = false;

rainbowBtn.addEventListener('click', e => {
    if (rainbow != true) {
        rainbow = true;
        greyScale = false;
    } else {
        alert("You are already using the rainbow brush!");
    }    
});

greyScaleBtn.addEventListener('click', e => {
    if (greyScale != true) {
        rainbow = false;
        greyScale = true;
    } else {
        alert("You are already using the greyscale brush!");
    }
});

function createBoard(size) {
    const board = document.querySelector('.gridContainer');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size*size;

    for (let i = 0; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'lightgray';
        board.appendChild(square);

        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = 'black';

            if (greyScale === true) {
                square.style.backgroundColor = randomGreyScale();
                // square.style.backgroundColor = `black`;
                // ;
            } else if (rainbow === true) {
                square.style.backgroundColor = `rgb(${rainbowColor()}, ${rainbowColor()}, ${rainbowColor()})`;
            } 
        });
    }
};

// Creates a random rainbow color when the user drags their mouse over boxes.
function rainbowColor() {
    let randNum = Math.floor(Math.random() * 255);
    return randNum;
}

// Creates a greyscale pattern with an array of colors
function randomGreyScale() {
    let greyCodes = ['525252', '7A7A7A', 'D6D6D6', '000', '292929', '1C2122', '1C2735', '2F3D4F'];
    let randNum = Math.floor(Math.random() * 5);
    let newNumber = greyCodes[randNum];
    let colorCode = "#" + newNumber;
    return colorCode;  
}

// Clears Grid

clearBtn.addEventListener('click', e => {
    if (boardClear === false) {
        boardClear = true;
    } else {
        alert("The board is already cleared!");
    }
});





createBoard(10);