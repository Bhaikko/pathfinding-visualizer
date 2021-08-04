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

        this.nodeConsidered = [];
    }
}
