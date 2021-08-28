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
        this.visitedNodes = astar.visitedNodes;
    }

    SmoothPath = path => {
        let patharray = path.stack;
        
        let current = patharray[0];
        this.pathNodes.Push(current);

        for (let i = 1; i < patharray.length - 1; i++) {
            let isInLOS = this.LineOfSight(current, patharray[i + 1]);
            if (!isInLOS) {
                this.pathNodes.Push(patharray[i]);
                current = patharray[i];
            }
        }

        this.pathNodes.Push(patharray[patharray.length - 1]);
    }

    IsBlockedOnGrid = (x, y) => {
        let neighbor = graph[getIndexByRowCol(new Coordinate(
            x, y
        ))];

        return neighbor.isBlocked;
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
                if (f >= dx) {
                    if (this.IsBlockedOnGrid(
                        x0 + ((sx - 1) / 2), y0 + ((sy - 1) / 2)
                    )) {
                        return false;
                    }

                    y0 = y0 + sy;
                    f = f - dx;
                }

                if (
                    f != 0 && 
                    this.IsBlockedOnGrid(
                        x0 + ((sx - 1) / 2), 
                        y0 + ((sy - 1) / 2)
                    )
                ) {
                    return false;
                }

                if (
                    dy == 0 &&
                    this.IsBlockedOnGrid(x0 + ((sx - 1) / 2), y0) &&
                    this.IsBlockedOnGrid(x0 + ((sx - 1) / 2), y0 - 1) 
                ) {
                    return false;
                }

                x0 = x0 + sx;
            }
        } else {
            while (y0 != y1) {
                f = f + dx;
    
                if (f >= dy) {
                    if (this.IsBlockedOnGrid(
                        x0 + ((sx - 1) / 2), y0 + ((sy - 1) / 2) 
                    )) {
                        return false;
                    }
    
                    x0 = x0 + sx;
                    f = f - dy;
                }
    
                if (
                    f != 0 &&
                    this.IsBlockedOnGrid(
                        x0 + ((sx - 1) / 2), y0 + ((sy - 1)/ 2)
                    )
                ) {
                    return false;
                }
    
                if (
                    dx == 0 &&
                    this.IsBlockedOnGrid(x0, y0 + ((sy - 1) / 2)) && 
                    this.IsBlockedOnGrid(x0 - 1, y0 + ((sy - 1) / 2)) 
                ) {
                    return false;
                }
    
                y0 = y0 + sy;
            }
        }

        return true;
    }
}