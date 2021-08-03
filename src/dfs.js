// Returns Path Array
const GetPathStack = (endNode, pathStack) => {
    
    let currentNode = endNode;
    
    while (currentNode != null) {
        pathStack.Push(currentNode);
        currentNode = currentNode.parent;
    }
}

let pathFound = false;

const DFS = (currentNode, endNode, pathStack) => {
    if (
        currentNode.coordinates.x === endNode.coordinates.x &&
        currentNode.coordinates.y === endNode.coordinates.y
    ) {
        // Path Found
        pathFound = true;
        GetPathStack(endNode, pathStack);
        return;
    }

    if (currentNode.isVisited || pathFound) {
        return;
    }
    
    currentNode.isVisited = true;

    if (currentNode.coordinates.x + 1 < colCount) {
        let neighborIndex = getIndexByRowCol(new Coordinate(
            currentNode.coordinates.x + 1, 
            currentNode.coordinates.y
        ));

        let neighborNode = graph[neighborIndex];

        if (!neighborNode.isVisited) {
            neighborNode.parent = currentNode;
    
            DFS(neighborNode, endNode, pathStack);
        }

    }

    if (currentNode.coordinates.y + 1 < rowCount) {
        let neighborIndex = getIndexByRowCol(new Coordinate(
            currentNode.coordinates.x, 
            currentNode.coordinates.y + 1
        ));

        let neighborNode = graph[neighborIndex];
        
        if (!neighborNode.isVisited) {
            neighborNode.parent = currentNode;
    
            DFS(neighborNode, endNode, pathStack);
        }
    }

    if (currentNode.coordinates.x - 1 >= 0) {
        let neighborIndex = getIndexByRowCol(new Coordinate(
            currentNode.coordinates.x - 1, 
            currentNode.coordinates.y
        ));

        let neighborNode = graph[neighborIndex];
        
        if (!neighborNode.isVisited) {
            neighborNode.parent = currentNode;
    
            DFS(neighborNode, endNode, pathStack);
        }
    }

    if (currentNode.coordinates.y - 1 >= 0) {
        let neighborIndex = getIndexByRowCol(new Coordinate(
            currentNode.coordinates.x, 
            currentNode.coordinates.y - 1
        ));

        let neighborNode = graph[neighborIndex];
       
        if (!neighborNode.isVisited) {
            neighborNode.parent = currentNode;
    
            DFS(neighborNode, endNode, pathStack);
        }
    }

}