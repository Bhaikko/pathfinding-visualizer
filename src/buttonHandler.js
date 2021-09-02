const randomBlocksBtn = document.getElementById("random-btn");
const resetBlockBtn = document.getElementById("reset-btn");

randomBlocksBtn.addEventListener("click", () => {
    makeRandomBlockes();
});

resetBlockBtn.addEventListener("click", () => {
    resetBlockedCells();
});

const placeStartBtn = document.getElementById("place-start-btn");
const placeBlockBtn = document.getElementById("place-block-btn");
const placeEndBtn = document.getElementById("place-end-btn");

const resetButtons = () => {
    placeStartBtn.classList.remove("button-selected");
    placeBlockBtn.classList.remove("button-selected");
    placeEndBtn.classList.remove("button-selected");
}

placeStartBtn.addEventListener("click", () => {
    resetButtons();

    placeStartBtn.classList.add("button-selected");
});

placeBlockBtn.addEventListener("click", () => {
    resetButtons();

    placeBlockBtn.classList.add("button-selected");
});

placeEndBtn.addEventListener("click", () => {
    resetButtons();

    placeEndBtn.classList.add("button-selected");
});