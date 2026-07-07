class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(val) {
        if(this.isFull()) return false;

        if(this.isEmpty()) this.front = 0;

        this.rear = ((this.rear + 1) % this.size);
        this.queue[this.rear] = val;
    }

    dequeue() {
        const val = this.queue[this.front];

        this.front = ((this.front +1) % this.size);
        return val;
    }


    isFull() {
        return ((this.rear + 1) % this.size) === this.front;
    }
    isEmpty() {
        return this.front === -1;
    }
}

const cq = new CircularQueue(4);
cq.enqueue(1); // [1, _, _, _]
cq.enqueue(2); // [1, 2, _, _]
cq.enqueue(3); // [1, 2, 3, _]
cq.enqueue(4); // [1, 2, 3, 4]
console.log(cq.isFull());    // true ✅
//console.log(cq.enqueue(6));
console.log(cq.dequeue());   // 1
cq.enqueue(5);               // wraps! [5, 2, 3, 4]
console.log(cq.dequeue());   // 2
cq.enqueue(6);               // wraps! [5, 2, 3, 4]
console.log(cq.queue)
console.log(cq.dequeue());   // 3 ✅
cq.enqueue(7);  
console.log(cq.queue)   