const graphDiv = document.getElementById("graph");

const graphWidth = graphDiv.offsetWidth;
const graphHeight = graphDiv.offsetHeight
const nodeWidth = 20;
const nodeHeight = 20;

const colCount = Math.floor(graphWidth / nodeWidth);
const rowCount = Math.floor(graphHeight / nodeHeight);

class Node {
    constructor(xCoord, yCoord, htmlRef) {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.htmlRef = htmlRef;
    }
}

const graph = [];

const getIndexByRowCol = (row, col) => (row * rowCount + col)

let graphString = "";
for (let i = 1; i <= rowCount; i++) {
    for (let j = 1; j <= colCount; j++) {
        let graphNode = document.createElement("span");
        graphNode.className = "graph-node";

        graph.push(new Node(i, j, graphNode));

        graphDiv.appendChild(graphNode);
        // graphString += `<span class="graph-node"></span>`;
    }

    // graphString += `<br/>`;
}

// graphDiv.innerHTML = graphString;

console.log(graph[getIndexByRowCol(1, 1)])