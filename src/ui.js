const visualizeBtn = document.getElementById("visualize-btn");

visualizeBtn.addEventListener("click", event => {
    let pathStack = new Stack();

    DFS(startNode, endNode, pathStack);

    if (pathStack.stack.length === 0) {
        console.log("No Path Found");
    } else {
        // console.log(pathStack.stack);
        paintPath(pathStack.stack)
    }
});