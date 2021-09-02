// creating object for queue class
var queue = new Queue();
              
  
// Testing Pop and pop on an empty queue
// returns Underflow
queue.Pop();
  
// returns true
console.log(queue.IsEmpty());
  
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.Push(10);
queue.Push(20);
queue.Push(30);
queue.Push(40);
queue.Push(50);
queue.Push(60);
// console.log(queue.items);
  
// returns 10
console.log(queue.Front());
console.log(queue.items.length);

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
queue.Pop();

// returns 20
console.log(queue.Front());
console.log(queue.items.length);

// removes 20
// queue contains [30, 40, 50, 60]
queue.Pop();

// console.log(queue.items);
console.log(queue.Front());
console.log(queue.items.length);

queue.Push(10);
// console.log(queue.items);
console.log(queue.Front());
console.log(queue.items.length);