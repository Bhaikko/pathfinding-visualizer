const visualizeBtn = document.getElementById("visualize-btn");

visualizeBtn.addEventListener("click", event => {
    let pathStack = new Stack();
    let nodesVisited = [];

    DFS(startNode, endNode, pathStack, nodesVisited);

    if (pathStack.stack.length === 0) {
        console.log("No Path Found");
    } else {
        // console.log(pathStack.stack);
        paintPath(nodesVisited, "graph-node-red");

        setTimeout(() => {
            paintPath(pathStack.stack, "graph-node-green");
        }, 1000)
    }
});