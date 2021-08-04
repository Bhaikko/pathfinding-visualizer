const graphDiv = document.getElementById("graph");

const graphWidth = graphDiv.offsetWidth;
const graphHeight = graphDiv.offsetHeight
const nodeWidth = 50;
const nodeHeight = 50;

const intervalBetweenPathPaint = 10;

const colCount = Math.floor(graphWidth / nodeWidth);
const rowCount = Math.floor(graphHeight / nodeHeight);
// const colCount = 4;
// const rowCount = 4;

const graph = [];

const endCoord = new Coordinate(
    Math.floor((colCount - 1)),
    Math.floor((rowCount - 1))
);

const startCoord = new Coordinate(1, 1);

// console.log(colCount, rowCount);
// console.log(endCoord);

const attachHandlers = node => {
    node.htmlRef.addEventListener("click", event => {
        node.isBlocked = !node.isBlocked;

        if (node.isBlocked) {
            node.htmlRef.classList.add("graph-node-block");
        } else {
            node.htmlRef.classList.remove("graph-node-block");
        }
    });
}

const getIndexByRowCol = (coord) => (coord.y * colCount + coord.x);

// Building Grid
for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
        let graphNode = document.createElement("span");
        graphNode.className = "graph-node";
        graphNode.style.width = `${nodeWidth}px`;
        graphNode.style.height = `${nodeHeight}px`;
        // graphNode.textContent = `(${j}, ${i})`;  // For Coordinate Show

        let newNode = new Node(j, i, graphNode);
        graph.push(newNode);

        attachHandlers(newNode);

        graphDiv.appendChild(graphNode);
    }
}

const startNode = graph[getIndexByRowCol(startCoord)];
const endNode = graph[getIndexByRowCol(endCoord)];

startNode.htmlRef.classList.add("graph-node-start");
endNode.htmlRef.classList.add("graph-node-end");

const paintPath = (pathStack, className) => {
    pathStack.reverse();
    pathStack.map((node, i) => {
        setTimeout(() => {
            if (node === startNode || node === endNode) {
                return;
            }
            node.htmlRef.classList.add(className);
            // node.htmlRef.classList.add("graph-node-green");
        }, i * intervalBetweenPathPaint)
    });
}




