const randomBlocksBtn = document.getElementById("random-btn");
const resetBlockBtn = document.getElementById("reset-btn");

randomBlocksBtn.addEventListener("click", () => {
    makeRandomBlockes();
});

resetBlockBtn.addEventListener("click", () => {
    resetBlockedCells();
})