
class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return (i * 2) + 1; }
    rightChild(i) { return (i * 2) + 2; }

    swap(i , j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() { return this.heap[0] }

    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.bubbleUp();
    }

    dequeue() {
        if(!this.heap.length) return null;

        let min = this.heap[0] // Save Min
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleDown(i) {
        let n = this.heap.length;

        while(true) {
            let smallest = i;
            let left =  this.leftChild(i);
            let right = this.rightChild(i);

            if (left < n && this.heap[left].priority < this.heap[smallest].priority) { smallest = left; }
            if (right < n && this.heap[right].priority < this.heap[smallest].priority) { smallest = right; }

            if(smallest != i) {
                this.swap(i, smallest);
                i = smallest;
            } else break;
        }
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while(i > 0) {
            let p = this.parent(i);

            if (this.heap[i].priority < this.heap[p].priority) {
                this.swap(p, i);
                i = p;
            } else break;
        }
    }

}


const pq = new PriorityQueue();
pq.enqueue("Low task",    4);
pq.enqueue("High task",   1); // highest priority!
pq.enqueue("Medium task", 3);
pq.enqueue("Medium task", 2);


console.log(pq.heap);

console.log(pq.dequeue()); // { value: "High task",   priority: 1 }
console.log(pq.dequeue()); // { value: "Medium task", priority: 2 }
console.log(pq.dequeue()); // { value: "Low task",    priority: 3 }

console.log(pq.heap);

