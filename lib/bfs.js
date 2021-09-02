class BFS {
    constructor() {
        this.pathFound = false;

        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }

    Execute = (startNode, endNode) => {
        this.Bfs(startNode, endNode);
    }

    GetPathStack = endNode => {
        let currentNode = endNode;
        
        while (currentNode != null) {
            this.pathNodes.Push(currentNode);
            currentNode = currentNode.parent;
        }

        this.pathNodes.stack.reverse();
    }

    Bfs = (startNode, endNode) => {
        let pendingNodes = new Queue();

        pendingNodes.Push(startNode);

        while (!pendingNodes.IsEmpty()) {
            let currentNode = pendingNodes.Front();
            currentNode.isVisited = true;
            pendingNodes.Pop();

            this.visitedNodes.push(currentNode);

            if (
                currentNode.coordinates.x === endNode.coordinates.x &&
                currentNode.coordinates.y === endNode.coordinates.y
            ) {
                this.pathFound = true;
                this.GetPathStack(endNode);
                break;
            }

            if (this.pathFound) {
                break;
            }

            if (currentNode.coordinates.x + 1 < colCount) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    currentNode.coordinates.x + 1, 
                    currentNode.coordinates.y
                ));
        
                let neighborNode = graph[neighborIndex];
        
                if (!neighborNode.isVisited && !neighborNode.isBlocked) {
                    neighborNode.isVisited = true;
                    pendingNodes.Push(neighborNode);
                    neighborNode.parent = currentNode; 
                }
            }

            if (currentNode.coordinates.y + 1 < rowCount) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    currentNode.coordinates.x, 
                    currentNode.coordinates.y + 1
                ));
        
                let neighborNode = graph[neighborIndex];
        
                if (!neighborNode.isVisited && !neighborNode.isBlocked) {
                    neighborNode.isVisited = true;
                    pendingNodes.Push(neighborNode);
                    neighborNode.parent = currentNode;
                }
            }

            if (currentNode.coordinates.x - 1 >= 0) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    currentNode.coordinates.x - 1, 
                    currentNode.coordinates.y
                ));
        
                let neighborNode = graph[neighborIndex];
        
                if (!neighborNode.isVisited && !neighborNode.isBlocked) {
                    neighborNode.isVisited = true;
                    pendingNodes.Push(neighborNode);
                    neighborNode.parent = currentNode;
                }
            }

            if (currentNode.coordinates.y - 1 >= 0) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    currentNode.coordinates.x, 
                    currentNode.coordinates.y - 1
                ));
        
                let neighborNode = graph[neighborIndex];
        
                if (!neighborNode.isVisited && !neighborNode.isBlocked) {
                    neighborNode.isVisited = true;
                    pendingNodes.Push(neighborNode);
                    neighborNode.parent = currentNode;
                }
            }
        }
    }
}