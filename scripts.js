playSpace = document.querySelector(".playSpace");
container = document.querySelector(".container");

const playSpaceWidth = 600;
const containerWidth = playSpaceWidth + 120;
var givenWidth = 16;
var numOfBoxes = givenWidth**2;

container.style.width = `${containerWidth}px`;
container.style.height = `${containerWidth}px`;
playSpace.style.width = `${playSpaceWidth}px`;
playSpace.style.height = `${playSpaceWidth}px`;
playSpace.style.gridTemplateColumns = `repeat(${givenWidth}, 1fr)`;
playSpace.style.gridTemplateRows = `repeat(${givenWidth}, 1fr)`;

for (let i = 1; i<= numOfBoxes; i++) {
    const box = document.createElement(`div`);
    box.setAttribute(`class`, `playSquare`);
    box.style.backgroundColor = `mediumslateblue`;
    box.style.borderStyle = 'solid';
    box.style.borderWidth = '0px';
    box.style.borderRadius = `4px`;
    playSpace.appendChild(box);
}

