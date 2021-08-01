const graphDiv = document.getElementById("graph");

const graphWidth = graphDiv.offsetWidth;
const graphHeight = graphDiv.offsetHeight
const nodeWidth = 50;
const nodeHeight = 50;

const colCount = Math.floor(graphWidth / nodeWidth);
const rowCount = Math.floor(graphHeight / nodeHeight);
// const colCount = 4;
// const rowCount = 4;

class Coordinate {
    constructor(xCoord, yCoord) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
    }
}

class Node {
    constructor(xCoord, yCoord, htmlRef) {
        this.coordinates = new Coordinate(xCoord, yCoord)
        this.htmlRef = htmlRef;
        this.isVisited = false;
        this.isStart = false;
        this.isEnd = false;
        this.isBlocked = false;
        this.parent = null;
    }
}


const graph = [];

const endCoord = new Coordinate(
    Math.floor((colCount - 1) / 2),
    Math.floor((rowCount - 1) / 2)
);

// console.log(colCount, rowCount);
// console.log(endCoord);

const getIndexByRowCol = (coord) => (coord.yCoord * colCount + coord.xCoord);

for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
        let graphNode = document.createElement("span");
        graphNode.className = "graph-node";
        graphNode.style.width = `${nodeWidth}px`;
        graphNode.style.height = `${nodeHeight}px`;
        graphNode.textContent = `(${j}, ${i})`;  // For Coordinate Show

        graph.push(new Node(j, i, graphNode));

        graphDiv.appendChild(graphNode);
    }
}

const endNodeIndex = getIndexByRowCol(endCoord);
const endNode = graph[getIndexByRowCol(endCoord)];

// console.log(endNodeIndex);
endNode.htmlRef.classList.add("graph-node-end");

// Accessing Node of Graph
// graph[getIndexByRowCol(0, 0)].htmlRef.setAttribute("class", "hello");


const paintPath = pathCoords => {
    graph.map(node => {
        pathCoords.map(coord => {
            if (
                node.xCoord == coord[0] && 
                node.yCoord == coord[1]
            ) {
                node.htmlRef.classList.add("graph-node-green");
            }
        })
    })
}




