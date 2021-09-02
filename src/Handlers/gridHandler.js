const app = document.getElementById("app");
const graphDiv = document.getElementById("graph");

const graphWidth = graphDiv.offsetWidth;
const graphHeight = graphDiv.offsetHeight

let nodeSize = 20;
const nodeWidth = nodeSize;
const nodeHeight = nodeSize;

const intervalBetweenPathPaint = 10;

const colCount = Math.floor(graphWidth / nodeWidth);
const rowCount = Math.floor(graphHeight / nodeHeight);
// const colCount = 4;
// const rowCount = 4;

const graph = [];


const toggleBlocked = node => {
    node.isBlocked = !node.isBlocked;
    
    if (node.isBlocked) {
        node.htmlRef.classList.add("graph-node-block");
    } else {
        node.htmlRef.classList.remove("graph-node-block");
    }
}

const setBlockState = (node, state) => {
    node.isBlocked = state;

    node.htmlRef.classList.remove("graph-node-green");
    node.htmlRef.classList.remove("graph-node-red");

    if (node.isBlocked) {
        node.htmlRef.classList.add("graph-node-block");
    } else {
        node.htmlRef.classList.remove("graph-node-block");
    }
}

const setNewStart = node => {
    startNode.htmlRef.classList.remove("graph-node-start");
    node.isBlocked = false;
    startNode = node;
    startNode.htmlRef.classList.add("graph-node-start");
    
}

const setNewEnd = node => {
    endNode.htmlRef.classList.remove("graph-node-end");
    node.isBlocked = false;
    endNode = node;
    endNode.htmlRef.classList.add("graph-node-end");
}

const attachHandlers = node => {
    node.htmlRef.addEventListener("click", event => {
        switch (currentButtonState) {
            case ButtonState.PLACE_START:
                setNewStart(node);
                break;

            case ButtonState.PLACE_BLOCK:
                toggleBlocked(node);
                break;

            case ButtonState.PLACE_END:
                setNewEnd(node);
                break;

            default:
                break;
        }

    });
}

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

const paintPath = (pathStack, className) => {
    return pathStack.map((node, i) => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => {
                if (node === startNode || node === endNode) {
                    resolve();
                    return;
                }
                
                node.htmlRef.classList.add(className);
                resolve();
            }, i * 0.1 * intervalBetweenPathPaint)
        })
    });
}

const linedraw = (x1, y1, x2, y2) => {
    if (x2 < x1) {
        let tmp;
        tmp = x2 ; x2 = x1 ; x1 = tmp;
        tmp = y2 ; y2 = y1 ; y1 = tmp;
    }

    let lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let m = (y2 - y1) / (x2 - x1);

    let degree = Math.atan(m) * 180 / Math.PI;

    return ( 
        "<div class='line' style='transform-origin: top left; transform: rotate(" + 
        degree + 
        "deg); width: " + 
        lineLength + 
        "px; height: 5px; background: black; position: absolute; top: " + 
        y1 + 
        "px; left: " + 
        x1 + 
        "px;'></div>"
    );
}

const pathLinePath = (pathStack, className) => {
    let lineString = "";
    for (let i = 0; i < pathStack.length - 1; i++) {
        let current = pathStack[i].htmlRef.getBoundingClientRect();
        let next = pathStack[i + 1].htmlRef.getBoundingClientRect();

        if (i !== 0) {
            pathStack[i].htmlRef.classList.add(className);
        }

        lineString += linedraw(
            current.x + nodeSize / 2, 
            current.y + nodeSize / 2, 
            next.x + nodeSize / 2, 
            next.y + nodeSize / 2
        );
    }

    app.innerHTML += lineString;
        
}

const resetBlockedCells = () => {
    resetResult();
    graph.map(node => {
        setBlockState(node, false);
    });
}

const makeRandomBlockes = () => {
    graph.map(node => {
        if (node === startNode || node === endNode) {
            return;
        }

        if (Math.random() < 0.20) {
            setBlockState(node, true);
        }
    });
}


const getIndexByRowCol = (coord) => (coord.y * colCount + coord.x);

let startCoord = new Coordinate(1, 1);
let endCoord = new Coordinate(
    Math.floor((colCount - 1)) - 2,
    Math.floor((rowCount - 1)) - 2
);

let startNode = graph[getIndexByRowCol(startCoord)];
let endNode = graph[getIndexByRowCol(endCoord)];

startNode.htmlRef.classList.add("graph-node-start");
endNode.htmlRef.classList.add("graph-node-end");
