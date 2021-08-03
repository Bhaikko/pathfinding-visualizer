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
        console.log(currentNode.coordinates, endNode.coordinates)

        // Path Found
        pathFound = true;
        GetPathStack(endNode, pathStack);
        return;
    }

    if (currentNode.isVisited) {
        return;
    }
    
    currentNode.isVisited = true;
    // pathStack.Push(currentNode);

    if (currentNode.coordinates.x + 1 < colCount) {
        let neighborIndex = getIndexByRowCol(new Coordinate(
            currentNode.coordinates.x + 1, 
            currentNode.coordinates.y
        ));

        let neighborNode = graph[neighborIndex];

        if (!neighborNode.isVisited) {
            neighborNode.parent = currentNode;
    
            DFS(neighborNode, endNode, pathStack);

            if (pathFound) {
                return;
            }
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

            if (pathFound) {
                return;
            }
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

            if (pathFound) {
                return;
            }
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

            if (pathFound) {
                return;
            }
        }
    }

}