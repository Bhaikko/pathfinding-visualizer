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
        Promise.all(paintPath(currentAlgo.visitedNodes, "graph-node-red"));
        // console.log("No Path Found");
        setResult("No Path Found.", "result-red");
    } else {
        Promise.all(paintPath(currentAlgo.visitedNodes, "graph-node-red"))
        .then(() => {
                setResult("Path Found.", "result-green");
                if (drawLinePath) {
                    setTimeout(() => {
                        pathLinePath(currentAlgo.pathNodes.stack, "graph-node-green");
                    }, 1000)
                } else {            
                    setTimeout(() => {
                        paintPath(currentAlgo.pathNodes.stack, "graph-node-green");
                    }, 1000)
                }
            });
    }
});