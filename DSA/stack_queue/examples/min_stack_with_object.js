class MinStack {
    constructor() {
        this.items = [];
    }

    push(val) {
       const minVal = Math.min(val, this.getMin() ?? val);

       this.items.push({val, minVal });
    }

    pop() {
        this.items.pop();
    }

    getMin() {
        return this.items[this.items.length -1]?.minVal;
    }

    size() {
        return this.items.length;
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
ms.push(2);
console.log(ms.getMin());
console.log(ms.items);