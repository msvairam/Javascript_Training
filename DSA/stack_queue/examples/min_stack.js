class MinStack {
    constructor() {
        this.minStack = [];
        this.items = [];
    }

    push(val) {
        this.items.push(val);
        
        if(this.minStack.length === 0 || val < this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const element = this.items.pop();

        if(element === this.getMin()) {
            this.minStack.pop();
        }
        return element;
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const ms = new MinStack();
ms.push(5);
ms.push(3);
ms.push(7);
ms.push(2);
ms.push(4);

console.log(ms.getMin()); // 2 ✅ O(1)!
ms.pop();                 // remove 4
ms.pop();                 // remove 2
console.log(ms.getMin()); // 3 ✅ O(1)!*/
console.log(ms.minStack);
ms.push(2);
console.log(ms.getMin()); // 2 ✅ O(1)!*/