const gridContainer = document.querySelector("#grid-container");

for (i = 0; i < 256; i++) {
    const element = document.createElement("div");
    element.setAttribute("class", "squareGrid");
    gridContainer.appendChild(element);
}

let squaresPerSide = 16;

const grids = document.querySelectorAll(".squareGrid");
grids.forEach((grid) => {
    const gridWidth = 560 / squaresPerSide;
    grid.style.width = `${gridWidth}px`;
})


gridContainer.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "yellow";
})

const btn = document.createElement("button");
btn.textContent = "Begin!";
document.body.insertBefore(btn, gridContainer);

btn.addEventListener("click", () => {
    squaresPerSide = Number(prompt("Enter the number of squares per side (max 100): "));

    while (squaresPerSide > 100) {
        squaresPerSide = Number(prompt("Number of squares per side cannot exceed 100: "));
    }

    const totalSquares = squaresPerSide * squaresPerSide;

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (i = 0; i < totalSquares; i++) {
        const element = document.createElement("div");
        element.setAttribute("class", "squareGrid");
        gridContainer.appendChild(element);
    }
    
    const grids = document.querySelectorAll(".squareGrid");
    grids.forEach((grid) => {
    const gridWidth = 560 / squaresPerSide;
    grid.style.width = `${gridWidth}px`;
    })
    
})