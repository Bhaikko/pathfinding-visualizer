const visualizeBtn = document.getElementById("visualize-btn");

visualizeBtn.addEventListener("click", event => {
    // let pathStack = new Stack();
    // let nodesVisited = [];

    const dfs = new BFS();
    dfs.Bfs(startNode, endNode);

    // DFS(startNode, endNode, pathStack, nodesVisited);

    if (dfs.pathNodes.stack.length === 0) {
        console.log("No Path Found");
    } else {
        // console.log(pathStack.stack);
        paintPath(dfs.visitedNodes, "graph-node-red");

        setTimeout(() => {
            paintPath(dfs.pathNodes.stack, "graph-node-green");
        }, 1000)
    }
});