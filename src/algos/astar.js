class Astar {
    constructor() {
        this.pathFound = 0;

        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }

    Execute = (startNode, endNode) => {
        this.aStar(startNode, endNode);
    }

    GetPathStack = endNode => {
        let currentNode = endNode;
        
        while (currentNode != null) {
            this.pathNodes.Push(currentNode);
            currentNode = currentNode.parent;
        }

        this.pathNodes.stack.reverse();
    }

    GetFcost = node => {
        return node.gCost + node.hCost;
    }

    FCostMinHeap = (node1, node2) => {
        return this.GetFcost(node1) < this.GetFcost(node2);
    }

    Distance = (node1, node2) => {
        let x = Math.pow((node1.coordinates.x - node2.coordinates.x), 2);
        let y = Math.pow((node1.coordinates.y - node2.coordinates.y), 2);

        return Math.sqrt(x + y) * 10;
    }

    GetNodeKey = node => {
        return String(node.coordinates.x) + "," + node.coordinates.y;
    }

    GetNeighbors = node => {
        let neighbors = [];

        if (node.coordinates.x + 1 < colCount) {
            let neighborIndex = getIndexByRowCol(new Coordinate(
                node.coordinates.x + 1,
                node.coordinates.y                    
            ));
            
            let neighborNode = graph[neighborIndex];

            neighbors.push(neighborNode);
            
        }   
        
        if (node.coordinates.y + 1 < rowCount) {
            let neighborIndex = getIndexByRowCol(new Coordinate(
                node.coordinates.x,
                node.coordinates.y + 1                    
            ));
            
            let neighborNode = graph[neighborIndex];
            neighbors.push(neighborNode);
        }

        if (node.coordinates.x - 1 >= 0) {
            let neighborIndex = getIndexByRowCol(new Coordinate(
                node.coordinates.x - 1,
                node.coordinates.y                    
            ));
            
            let neighborNode = graph[neighborIndex];
            neighbors.push(neighborNode);
            
        }   
        
        if (node.coordinates.y - 1 >= 0) {
            let neighborIndex = getIndexByRowCol(new Coordinate(
                node.coordinates.x,
                node.coordinates.y - 1                    
            ));
            
            let neighborNode = graph[neighborIndex];
            neighbors.push(neighborNode);
        }

        return neighbors;
    }

    OpensetContains = (openset, current) => {
        let doesContain = false;

        let nodes = [];
        while (!openset.isEmpty()) {
            nodes.push(openset.peek());

            if (
                openset.peek().coordinates.x === current.coordinates.x &&
                openset.peek().coordinates.y === current.coordinates.y
            ) {
                doesContain = true;
            }

            openset.pop();
        }

        nodes.map(node => {
            openset.push(node);
        });

        return doesContain;
    }

    aStar = (startNode, endNode) => {
        let openset = new PriorityQueue(this.FCostMinHeap);
        let closedSet = {};

        // closedSet[this.GetNodeKey(startNode)] = startNode;
        openset.push(startNode);
        
        while (!openset.isEmpty()) {
            let current = openset.peek();
            this.visitedNodes.push(current);

            // console.log(current.coordinates);

            closedSet[this.GetNodeKey(current)] = current;
            openset.pop();

            if (
                current.coordinates.x === endNode.coordinates.x &&
                current.coordinates.y === endNode.coordinates.y
            ) {
                // Path Found
                this.pathFound = true;
                this.GetPathStack(endNode);
                break;
            }

            let neightbors = this.GetNeighbors(current);

            for (let i = 0; i < neightbors.length; i++) {
                let neighbor = neightbors[i];

                if (
                    neighbor.isBlocked || 
                    closedSet[this.GetNodeKey(neighbor)]
                ) {
                    continue;
                }

                let newMovementCostToNeighbor = current.gCost + this.Distance(current, neighbor);

                if (
                    newMovementCostToNeighbor < neighbor.gCost ||
                    !this.OpensetContains(openset, neighbor)
                ) {
                    neighbor.gCost = newMovementCostToNeighbor;
                    neighbor.hCost = this.Distance(neighbor, endNode);
                    neighbor.parent = current;

                    if (!this.OpensetContains(openset, neighbor)) {
                        openset.push(neighbor);
                    }
                }                
            }
        }
    }
}