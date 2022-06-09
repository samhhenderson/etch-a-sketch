const playSpace = document.querySelector(".playSpace");
const container = document.querySelector(".container");
const slider = document.querySelector(".slider");
const eraser = document.querySelector(".eraseContainer");

//setup basic size of playing space; could be done in CSS but wanted practice
const playSpaceWidth = 600;
const containerWidth = playSpaceWidth + 240;
const containerHeight = containerWidth + 100;
container.style.width = `${containerWidth}px`;
container.style.height = `${containerHeight}px`;
playSpace.style.width = `${playSpaceWidth}px`;
playSpace.style.height = `${playSpaceWidth}px`;

//create the grid space based on slider value
const changeGrid = function(givenWidth) {
    
    //pre-emptively delete previous grid
    document.querySelectorAll(".playSquare").forEach(boxDiv => boxDiv.remove());
 
    var numOfBoxes = givenWidth**2;
    playSpace.style.gridTemplateColumns = `repeat(${givenWidth}, 1fr)`;
    playSpace.style.gridTemplateRows = `repeat(${givenWidth}, 1fr)`;
    

    for (let i = 1; i<= numOfBoxes; i++) {
        var box = document.createElement(`div`);
        box.setAttribute(`class`, `playSquare`);
        box.style.backgroundColor = `white`;
        box.style.borderStyle = 'solid';
        box.style.borderWidth = '0px';
        box.style.borderRadius = `1px`;
        playSpace.appendChild(box);
        box.addEventListener('mouseover', (e) => draw(e));
        box.addEventListener('mousedown', (e) => draw(e));
    }
}

//listen for mouse over with a held button 1
const draw = function(event) {
    if (event.buttons == 1) {
    event.target.style.backgroundColor = `gray`;
    }
}

const eraseAll = function() {
    document.querySelectorAll(".playSquare").forEach(boxDiv => {
        boxDiv.style.backgroundColor = `white`;
        });
}

slider.addEventListener(`click`, () => changeGrid(slider.value));
eraser.addEventListener(`click`, () => eraseAll());

changeGrid(4);
