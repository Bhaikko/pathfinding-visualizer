class BFS {
    constructor() {
        this.pathFound = false;

        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }

    GetPathStack = endNode => {
        let currentNode = endNode;
        
        while (currentNode != null) {
            this.pathNodes.Push(currentNode);
            currentNode = currentNode.parent;
        }

        this.pathNodes.stack.reverse();
    }

    Bfs = (currentNode, endNode) => {
        let pendingNodes = new Queue();

        pendingNodes.Push(currentNode);

        while (!pendingNodes.IsEmpty()) {
            let currentNode = pendingNodes.Front();
            
            currentNode.isVisited = true;
            if (currentNode == endNode) {
                this.pathFound = true;
                this.GetPathStack(endNode);
                return;
            }

            this.visitedNodes.push(currentNode);

            if (currentNode.coordinates.x + 1 < colCount) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    currentNode.coordinates.x + 1, 
                    currentNode.coordinates.y
                ));
        
                let neighborNode = graph[neighborIndex];
        
                if (!neighborNode.isVisited && !neighborNode.isBlocked) {
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
                    pendingNodes.Push(neighborNode);
                    neighborNode.parent = currentNode;
                }
            }

            pendingNodes.Pop();
        }
    }
}