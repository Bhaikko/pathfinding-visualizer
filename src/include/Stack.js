class Stack {
    constructor() {
        this.topIndex = -1;
        this.stack = [];
    }

    Push = node => {
        this.stack.push(node);
        this.topIndex++;
    }

    Pop = () => {
        if (this.topIndex == -1) {
            console.log("Empty Stack");
            return;
        }

        this.stack.pop();
        this.topIndex--;
        
    }

    Top = () => {
        return this.stack[this.topIndex];
    }
}