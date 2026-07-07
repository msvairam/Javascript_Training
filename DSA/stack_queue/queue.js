class Queue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        const element = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return element;
    }

    isEmpty() {
        return this.rear === this.front;
    }

    print() {
        console.log(Object.values(this.items).join(' -> '));
    }

    size() {
        return this.rear - this.front;
    }

    peek() {
        return this.items[this.front];
    }
}

// Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();              // 1 → 2 → 3
console.log(queue.items);
console.log(queue.peek());  // 1 (front)
console.log('size',queue.size());
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
queue.print();              // 3
console.log('size',queue.size());
console.log(queue.items);