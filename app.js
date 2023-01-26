// Initial Variables
let slider = document.querySelector(".slider");
let gridUnits = document.querySelector(".grid-value").textContent;

// Get grid container
let gridContainer = document.querySelector(".grid-container");

// Event listener to retrieve slider value
const getSliderValue = () => {
  slider.addEventListener("input", () => {
    gridUnits = slider.value;
    gridContainer.innerHTML = "";
    fillGrid(gridUnits);
    document.querySelector(".grid-value").textContent = slider.value;
  });
};

// Event listener to change colors
const changeColor = (box) => {
  box.addEventListener("mouseover", () => {
    box.style.background = "#000";
  });
};

// Event listener to button
const removeColors = () => {
  const resetBtn = document.querySelector(".reset-btn");
  resetBtn.addEventListener("click", () => {
    const gridNodes = gridContainer.childNodes;
    for (let i = 0; i < gridNodes.length; i++) {
      gridNodes[i].style.background = "none";
    }
  });
};

// Fill grid with div elements
const fillGrid = (gridUnits) => {
  for (let i = 0; i < gridUnits * gridUnits; i++) {
    let gridElement = document.createElement("div");
    gridElement.style.border = "1px solid black";

    gridContainer.style.gridTemplateColumns = `repeat(${gridUnits}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridUnits}, 1fr)`;

    changeColor(gridElement);
    gridContainer.appendChild(gridElement);
  }
};

// Main Function
const main = () => {
  fillGrid(gridUnits);
  removeColors();
  getSliderValue();
};

main();
