class AstarPS {
    constructor() {
        this.pathFound = false;

        this.pathNodes = new Stack();
        this.visitedNodes = [];
    }

    Execute = (startNode, endNode) => {
        let astar = new Astar();

        astar.Execute(startNode, endNode);

        this.SmoothPath(astar.pathNodes);

        // this.pathNodes = astar.pathNodes;
        this.visitedNodes = astar.visitedNodes;
    }

    SmoothPath = path => {
        let patharray = path.stack;

        let current = patharray[0];


        for (let i = 1; i < patharray.length - 1; i++) {
            if (!this.LineOfSight(current, patharray[i + 1])) {
                this.pathNodes.Push(patharray[i]);
                current = patharray[i];
            }
        }

        this.pathNodes.Push(patharray[patharray.length - 1]);
        

    }

    IsBlockedOnGrid = (x, y) => {
        // TODO
    }

    LineOfSight = (source, destination) => {
        let x0 = source.coordinates.x;
        let y0 = source.coordinates.y;

        let x1 = destination.coordinates.x;
        let y1 = destination.coordinates.y;

        let dy = y1 - y0;
        let dx = x1 - x0;

        let f = 0;

        let sx, sy;

        if (dy < 0) {
            dy = -dy;
            sy = -1;
        } else {
            sy = 1;
        }

        if (dx < 0) {
            dx = -dx;
            sx = -1;
        } else {
            sx = 1;
        }


        if (dx >= dy) {
            while (x0 != x1) {
                f = f + dy;
                if (f >= d) {
                    if (this.IsBlockedOnGrid(
                        // TODO
                    ))
                }
            }
        } else {

        }




        
    }
}