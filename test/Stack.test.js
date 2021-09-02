const stack = new Stack();

stack.Push(1);
stack.Push(2);
stack.Push(3);
console.log(stack.Top());
console.log(stack.Pop());
console.log(stack.Top());
console.log(stack.Pop());
console.log(stack.Top());
console.log(stack.Pop());
console.log(stack.Pop());
console.log(stack.Top());

stack.Push(1);
console.log(stack.Top());
