class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Node {
    constructor(x, y, htmlRef) {
        this.coordinates = new Coordinate(x, y)
        this.htmlRef = htmlRef;
        this.isVisited = false;
        this.isStart = false;
        this.isEnd = false;
        this.isBlocked = false;
        this.parent = null;
        this.distanceFromSource = Number.MAX_SAFE_INTEGER;

        this.gCost = 0;
        this.hCost = 0;

        this.nodeConsidered = [];
    }
}
