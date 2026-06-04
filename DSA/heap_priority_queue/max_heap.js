class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i],  this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let i = this.heap.length - 1;

        while(i > 0) {
            let parentIndex = this.parent(i);

            if (this.heap[parentIndex] < this.heap[i]) {
                this.swap(parentIndex, i);
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (!this.heap.length) return null;
        if (this.heap.length == 1) return this.heap[0];

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    bubbleDown(i) {
        let n = this.heap.length;

        while(true) {
            let largest = i;
            let left = this.leftChild(i);
            let right = this.rightChild(i);

            if (left < n && this.heap[left] > this.heap[largest]) { largest = left; }
            if (right < n && this.heap[right] > this.heap[largest]) { largest = right;  }

            if(largest != i) {
                this.swap(i, largest);
                i = largest;
            } else {
                break;
            }
        }
    }
}


const heap = new MaxHeap();
heap.insert(5);

console.log(heap.heap);
heap.insert(3);

console.log(heap.heap);
heap.insert(8);
heap.insert(7);
console.log(heap.heap);
heap.insert(1);
heap.insert(4);

console.log(heap.heap);
console.log(heap.peek()); // 8 (maximum!)
console.log(heap.extractMax()); // 8
console.log(heap.heap);
console.log(heap.extractMax()); // 7
console.log(heap.heap);
console.log(heap.extractMax()); // 5
console.log(heap.heap);
