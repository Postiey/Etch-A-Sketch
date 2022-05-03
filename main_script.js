// Etch-A-Sketch
// Made by Postiey :)

// Created box shadow
// Created clearboard function and works properly
// Setup resize buttons that all work correctly

const colorPickerBtn = document.querySelector('.colorPicker');

const gridResize = document.querySelector('.gridResize');
const gridDropdown = document.querySelector('.gridDropdown');

const rainbowBtn = document.querySelector('.rainbow');
const greyScaleBtn = document.querySelector('.greyscale');
const clearBtn = document.querySelector('.resetGrid');

const resetBoard = document.querySelector('.gridContainer');

const btn1 = document.querySelector('.first');
const btn2 = document.querySelector('.second');
const btn3 = document.querySelector('.third');
const btn4 = document.querySelector('.four');

let customColor = false;
let rainbow = false;
let greyScale = false;
let boardClear = false;


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
            } else if (rainbow === true) {
                square.style.backgroundColor = `rgb(${rainbowColor()}, ${rainbowColor()}, ${rainbowColor()})`;
            } 
        });
    }
};

// Clears the entire board
function clearBoard() {
    let reset = resetBoard;
    reset.innerHTML = '';
}

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

// Event Listeners //
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

gridResize.addEventListener('click', e => {
    gridDropdown.classList.toggle('notHidden');
});

btn1.addEventListener('click', e => {
    clearBoard();
    createBoard(8);
});

btn2.addEventListener('click', e => {
    clearBoard();
    createBoard(16);
});

btn3.addEventListener('click', e => {
    clearBoard();
    createBoard(32);
});

btn4.addEventListener('click', e => {
    clearBoard();
    createBoard(64);
});

createBoard(16);