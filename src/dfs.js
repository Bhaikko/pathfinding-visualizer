class DFS {
    constructor() {
        this.pathFound = false;
        
        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }   

    // Returns Path Array
    GetPathStack = endNode => {
        let currentNode = endNode;
        
        while (currentNode != null) {
            this.pathNodes.Push(currentNode);
            currentNode = currentNode.parent;
        }

        this.pathNodes.stack.reverse();
    }


    Dfs = (currentNode, endNode) => {
        if (
            currentNode.coordinates.x === endNode.coordinates.x &&
            currentNode.coordinates.y === endNode.coordinates.y
        ) {
            // console.log(currentNode.coordinates, endNode.coordinates)
    
            // Path Found
            this.pathFound = true;
            this.GetPathStack(endNode);
            return;
        }
    
        if (currentNode.isVisited || currentNode.isBlocked) {
            return;
        }
        
        currentNode.isVisited = true;
        this.visitedNodes.push(currentNode);
    
        if (currentNode.coordinates.x + 1 < colCount) {
            let neighborIndex = getIndexByRowCol(new Coordinate(
                currentNode.coordinates.x + 1, 
                currentNode.coordinates.y
            ));
    
            let neighborNode = graph[neighborIndex];
    
            if (!neighborNode.isVisited) {
                neighborNode.parent = currentNode;
        
                this.Dfs(neighborNode, endNode);
    
                if (this.pathFound) {
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
        
                this.Dfs(neighborNode, endNode);
    
                if (this.pathFound) {
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
        
                this.Dfs(neighborNode, endNode);
    
                if (this.pathFound) {
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
        
                this.Dfs(neighborNode, endNode);
    
                if (this.pathFound) {
                    return;
                }
            }
        }
    }
}




// const DFS = (currentNode, endNode, pathStack, nodesVisited) => {
//     if (
//         currentNode.coordinates.x === endNode.coordinates.x &&
//         currentNode.coordinates.y === endNode.coordinates.y
//     ) {
//         // console.log(currentNode.coordinates, endNode.coordinates)

//         // Path Found
//         pathFound = true;
//         GetPathStack(endNode, pathStack);
//         return;
//     }

//     if (currentNode.isVisited || currentNode.isBlocked) {
//         return;
//     }
    
//     currentNode.isVisited = true;
//     nodesVisited.push(currentNode);

//     if (currentNode.coordinates.x + 1 < colCount) {
//         let neighborIndex = getIndexByRowCol(new Coordinate(
//             currentNode.coordinates.x + 1, 
//             currentNode.coordinates.y
//         ));

//         let neighborNode = graph[neighborIndex];

//         if (!neighborNode.isVisited) {
//             neighborNode.parent = currentNode;
    
//             DFS(neighborNode, endNode, pathStack, nodesVisited);

//             if (pathFound) {
//                 return;
//             }
//         }

//     }

//     if (currentNode.coordinates.y + 1 < rowCount) {
//         let neighborIndex = getIndexByRowCol(new Coordinate(
//             currentNode.coordinates.x, 
//             currentNode.coordinates.y + 1
//         ));

//         let neighborNode = graph[neighborIndex];
        
//         if (!neighborNode.isVisited) {
//             neighborNode.parent = currentNode;
    
//             DFS(neighborNode, endNode, pathStack, nodesVisited);

//             if (pathFound) {
//                 return;
//             }
//         }
//     }

//     if (currentNode.coordinates.x - 1 >= 0) {
//         let neighborIndex = getIndexByRowCol(new Coordinate(
//             currentNode.coordinates.x - 1, 
//             currentNode.coordinates.y
//         ));

//         let neighborNode = graph[neighborIndex];
        
//         if (!neighborNode.isVisited) {
//             neighborNode.parent = currentNode;
    
//             DFS(neighborNode, endNode, pathStack, nodesVisited);

//             if (pathFound) {
//                 return;
//             }
//         }
//     }

//     if (currentNode.coordinates.y - 1 >= 0) {
//         let neighborIndex = getIndexByRowCol(new Coordinate(
//             currentNode.coordinates.x, 
//             currentNode.coordinates.y - 1
//         ));

//         let neighborNode = graph[neighborIndex];
       
//         if (!neighborNode.isVisited) {
//             neighborNode.parent = currentNode;
    
//             DFS(neighborNode, endNode, pathStack, nodesVisited);

//             if (pathFound) {
//                 return;
//             }
//         }
//     }

// }

