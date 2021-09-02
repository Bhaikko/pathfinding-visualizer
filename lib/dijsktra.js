class Dijkstra {
    constructor() {
        this.pathFound = false;

        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }

    Execute = (startNode, endNode) => {
        this.DijkstraAlgo(startNode, endNode);
    }

    GetPathStack = endNode => {
        let currentNode = endNode;
        
        while (currentNode != null) {
            this.pathNodes.Push(currentNode);
            currentNode = currentNode.parent;
        }

        this.pathNodes.stack.reverse();
    }

    Compare = (node1, node2) => {
        return node1.distanceFromSource < node2.distanceFromSource;
    }

    ProcessNeighborNode = (minVertex, neighborNode, pendingNodes) => {
        if (neighborNode.isBlocked) {
            return;
        }
        
        let distance = minVertex.distanceFromSource + 1;

        if (distance < neighborNode.distanceFromSource) {
            neighborNode.distanceFromSource = distance;
            pendingNodes.push(neighborNode);
            neighborNode.parent = minVertex;
        }
    }

    DijkstraAlgo = (startNode, endNode) => {
        startNode.distanceFromSource = 0;

        let pendingNodes = new PriorityQueue(this.Compare);
        pendingNodes.push(startNode);

        while (!pendingNodes.isEmpty()) {
            let minVertex = pendingNodes.peek();
            pendingNodes.pop();

            this.visitedNodes.push(minVertex);

            if (
                minVertex.coordinates.x === endNode.coordinates.x &&
                minVertex.coordinates.y === endNode.coordinates.y
            ) {
                // Path Found
                this.pathFound = true;
                this.GetPathStack(endNode);
                break;
            }

            if (this.pathFound) {
                break;
            }

            if (minVertex.isVisited) {
                continue;
            }

            minVertex.isVisited = true;

            if (minVertex.coordinates.x + 1 < colCount) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    minVertex.coordinates.x + 1,
                    minVertex.coordinates.y                    
                ));
                
                let neighborNode = graph[neighborIndex];

                this.ProcessNeighborNode(minVertex, neighborNode, pendingNodes);
                
            }   
            
            if (minVertex.coordinates.y + 1 < rowCount) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    minVertex.coordinates.x,
                    minVertex.coordinates.y + 1                    
                ));
                
                let neighborNode = graph[neighborIndex];
                this.ProcessNeighborNode(minVertex, neighborNode, pendingNodes);
            }

            if (minVertex.coordinates.x - 1 >= 0) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    minVertex.coordinates.x - 1,
                    minVertex.coordinates.y                    
                ));
                
                let neighborNode = graph[neighborIndex];
                this.ProcessNeighborNode(minVertex, neighborNode, pendingNodes);
                
            }   
            
            if (minVertex.coordinates.y - 1 >= 0) {
                let neighborIndex = getIndexByRowCol(new Coordinate(
                    minVertex.coordinates.x,
                    minVertex.coordinates.y - 1                    
                ));
                
                let neighborNode = graph[neighborIndex];
                this.ProcessNeighborNode(minVertex, neighborNode, pendingNodes);
            }
        }
    }


}