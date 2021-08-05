class Queue {
    constructor() {
        this.items = [];
    }

    Push = node => {
        this.items.push(node);
    }

    Pop = () => {
        if (this.items.length === 0) {
            console.log("Empty Queue");
            return;
        }

        this.items.shift();
    }

    Front = () => {
        return this.items[0];
    }

    IsEmpty = () => this.items.length === 0
}