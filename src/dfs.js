// Returns Path Array
const FillStack = endNode => {
    const pathStack = new Stack();
    
    let currentNode = endNode;
    while (currentNode != null) {
        pathStack.Push(currentNode);
        currentNode = currentNode.parent;
    }

    return pathStack;
}

const DFS = (currentNode, endNode) => {
    if (
        currentNode.x === endNode.x &&
        currentNode.y === endNode.y
    ) {
        // Path Found
        return FillStack();
    }

    if (currentNode.isVisited) {
        return;
    }

    console.log("Ins")

    currentNode.isVisited = true;

    if (currentNode.coordinates.x + 1 < graphWidth) {
        DFS(graph[getIndexByRowCol(
            new Coordinate(currentNode.coordinates.x + 1, currentNode.coordinates.y)
        )], endNode, pathStack);
    }

    
    if (currentNode.coordinates.y + 1 < graphHeight) {
        DFS(graph[getIndexByRowCol(
            new Coordinate(currentNode.coordinates.x, currentNode.coordinates.y + 1)
        )], endNode, pathStack);
    }

    if (currentNode.coordinates.x - 1 >= 0) {
        DFS(graph[getIndexByRowCol(
            new Coordinate(currentNode.coordinates.x - 1, currentNode.coordinates.y)
        )], endNode, pathStack);
    }

    
    if (currentNode.coordinates.y - 1 >= 0) {
        DFS(graph[getIndexByRowCol(
            new Coordinate(currentNode.coordinates.x, currentNode.coordinates.y - 1)
        )], endNode, pathStack);
    }

}