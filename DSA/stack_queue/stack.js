class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(isEmpty()) return null;
        return this.items.pop();
    }

    print() {
        console.log(this.items.join(' -> '));
    }

    peek() {
        if(isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() { return !this.items.length }
    size() { return this.items.length }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();           // 1 → 2 → 3
console.log(stack.peek()); // 3 (top)
console.log(stack.pop());  // 3
console.log(stack.pop());  // 2
stack.print();        // 1
console.log(stack.isEmpty());
console.log(stack.size());
stack.pop();
stack.print();        // 1
console.log(stack.isEmpty());
console.log(stack.size());