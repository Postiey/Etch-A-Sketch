// Etch-A-Sketch
// Made by Postiey :)

const colorPickerBtn = document.querySelector('.colorPicker');

const gridResize = document.querySelector('.gridResize');
const gridDropdown = document.querySelector('.gridDropdown');
const toggleGridlines = document.querySelector('.toggleGrid');

const rainbowBtn = document.querySelector('.rainbow');
const clearBtn = document.querySelector('.resetGrid');
const coolColorBtn = document.querySelector('.coolColors');
const warmColorBtn = document.querySelector('.warmColors');

const resetBoard = document.querySelector('.gridContainer');

const btn1 = document.querySelector('.first');
const btn2 = document.querySelector('.second');
const btn3 = document.querySelector('.third');
const btn4 = document.querySelector('.four');

let customColor = false;
let rainbow = false;
let coolColor = false;
let warmColor = false;
let boardClear = false;

let btn1Active = false;
let btn2Active = false;
let btn3Active = true;
let btn4Active = false;

let toggleLines = false;

function createBoard(size) {
    const board = document.querySelector('.gridContainer');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridSize = size*size;

    for (let i = 0; i <= gridSize; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = '#F6F4F3';
        
        board.appendChild(square);

        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = 'black';

            if (coolColor === true) {
                square.style.backgroundColor = randomCoolColor();
            } else if (rainbow === true) {
                square.style.backgroundColor = `rgb(${rainbowColor()}, ${rainbowColor()}, ${rainbowColor()})`;
            } else if (warmColor === true) {
                square.style.backgroundColor = randomWarmColor();
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
function randomCoolColor() {
    let coolCodes = ['1D323F', '2D5D62', '77A8A3', 'A1C7C7', 'B9D3CD'];
    let randNum = Math.floor(Math.random() * 5);
    let newNumber = coolCodes[randNum];
    let colorCode = "#" + newNumber;
    return colorCode;  
}

function randomWarmColor() {
    let warmCodes = ['540A15', '740819', 'AC132A', 'D03C2D', 'ECAD66'];
    let randNum = Math.floor(Math.random() * 5);
    let newNumber = warmCodes[randNum];
    let colorCode = "#" + newNumber;
    return colorCode;  
}

// Event Listeners //
rainbowBtn.addEventListener('click', e => {
    if (rainbow != true) {
        rainbow = true;
        coolColor = false;
        warmColor = false;
        rainbowBtn.classList.add('btnActive');
        coolColorBtn.classList.remove('btnActive');
        warmColorBtn.classList.remove('btnActive');
    } else if (rainbow === true) {
        rainbowBtn.classList.remove('btnActive');
        rainbow = false;
    }    
});

coolColorBtn.addEventListener('click', e => {
    if (coolColor != true) {
        rainbow = false;
        coolColor = true;
        warmColor = false;
        rainbowBtn.classList.remove('btnActive');
        coolColorBtn.classList.add('btnActive');
        warmColorBtn.classList.remove('btnActive');
    } else if (coolColor === true) {
        coolColorBtn.classList.remove('btnActive');
        coolColor = false;
    }
});

warmColorBtn.addEventListener('click', e => {
    if (warmColor != true) {
        rainbow = false;
        coolColor = false;
        warmColor = true;
        rainbowBtn.classList.remove('btnActive');
        coolColorBtn.classList.remove('btnActive');
        warmColorBtn.classList.add('btnActive');
    } else if (warmColor === true) {
        warmColorBtn.classList.remove('btnActive');
        warmColor = false;
    }
});

gridResize.addEventListener('click', e => {
    gridDropdown.classList.toggle('notHidden');
    gridResize.classList.toggle('btnActive');
});

btn1.addEventListener('click', e => {
    btn1Active = true;
    btn2Active = false;
    btn3Active = false;
    btn4Active = false;
    btn1.classList.add('btnActive');
    btn2.classList.remove('btnActive');
    btn3.classList.remove('btnActive');
    btn4.classList.remove('btnActive');
    clearBoard();
    createBoard(8);
});

btn2.addEventListener('click', e => {
    btn1Active = false;
    btn2Active = true;
    btn3Active = false;
    btn4Active = false;
    btn1.classList.remove('btnActive');
    btn2.classList.add('btnActive');
    btn3.classList.remove('btnActive');
    btn4.classList.remove('btnActive');
    clearBoard();
    createBoard(16);
});

btn3.addEventListener('click', e => {
    btn1Active = false;
    btn2Active = false;
    btn3Active = true;
    btn4Active = false;
    btn1.classList.remove('btnActive');
    btn2.classList.remove('btnActive');
    btn3.classList.add('btnActive');
    btn4.classList.remove('btnActive');
    clearBoard();
    createBoard(32);
});

btn4.addEventListener('click', e => {
    btn1Active = false;
    btn2Active = false;
    btn3Active = false;
    btn4Active = true;
    btn1.classList.remove('btnActive');
    btn2.classList.remove('btnActive');
    btn3.classList.remove('btnActive');
    btn4.classList.add('btnActive');
    clearBoard();
    createBoard(64);
});

clearBtn.addEventListener('click', e => {
    if (btn1Active === true) {
        clearBoard();
        createBoard(8);
    } else if (btn2Active === true) {
        clearBoard();
        createBoard(16);
    } else if (btn3Active === true) {
        clearBoard();
        createBoard(32);
    } else if (btn4Active === true) {
        clearBoard();
        createBoard(64);
    } else {
        clearBoard();
        createBoard(16);
    }
    
});

createBoard(16);
