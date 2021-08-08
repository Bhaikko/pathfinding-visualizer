let priorityQueue = new PriorityQueue((a, b) => a < b);

priorityQueue.push(20);
priorityQueue.push(50);
priorityQueue.push(30);
priorityQueue.push(40);
priorityQueue.push(10);

console.log(priorityQueue._heap);

priorityQueue.pop();
console.log(priorityQueue._heap);