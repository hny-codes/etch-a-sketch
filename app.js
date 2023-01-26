// Initial Variables
let GRID_UNITS = 16;

// Get grid container
let gridContainer = document.querySelector(".grid-container");

// Event listener to change colors
let changeElement = (box) => {
  box.addEventListener("mouseover", () => {
    box.style.background = "#000"
  })
}

// Fill grid with div elements
const fillGrid = (GRID_UNITS) => {
  for (let i = 0; i < GRID_UNITS * GRID_UNITS; i++) {
    let gridElement = document.createElement("div");
    gridElement.style.border = "1px solid black";

    gridContainer.style.gridTemplateColumns = `repeat(${GRID_UNITS}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${GRID_UNITS}, 1fr)`;

    changeElement(gridElement);
    gridContainer.appendChild(gridElement);
  }
};

// Main Function
const main = () => {
  fillGrid(GRID_UNITS);
};

main();
