const visualizeBtn = document.getElementById("visualize-btn");
const algoSelect = document.getElementById("algo-select");

visualizeBtn.addEventListener("click", event => {
    // console.log(algoSelect.value);
    let currentAlgo = null;
    let drawLinePath = false;

    switch (algoSelect.value) {
        case "dfs":
            currentAlgo = new DFS();
            break;

        case "bfs":
            currentAlgo = new BFS();
            break;

        case "dijsktra":
            currentAlgo = new Dijkstra();
            break;

        case "astar":
            currentAlgo = new Astar();
            break;

        case "astarPS":
            currentAlgo = new AstarPS();
            drawLinePath = true;
            break;

        default:
            break;
    }

    currentAlgo.Execute(startNode, endNode);

    if (currentAlgo.pathNodes.stack.length === 0) {
        console.log("No Path Found");
    } else {
        // console.log(pathStack.stack);

        paintPath(currentAlgo.visitedNodes, "graph-node-red");
        if (drawLinePath) {
            setTimeout(() => {
                // paintPath(currentAlgo.pathNodes.stack, "graph-node-green");
                pathLinePath(currentAlgo.pathNodes.stack, "graph-node-green");
            }, 1500)
        } else {
            setTimeout(() => {
                paintPath(currentAlgo.pathNodes.stack, "graph-node-green");
            }, 1500)
        }
    }
});