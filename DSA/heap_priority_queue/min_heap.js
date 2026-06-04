export class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Helper: get indices
  parent(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }

   size() { return this.heap.length; }

  // Helper: Swap two elements
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  // Peek - 0(1)
  peek() {
    return this.heap[0]; // root = minimum
  }

  // Insert — O(log n)
  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let i = this.heap.length - 1;

    while (i > 0) {
      let p = this.parent(i);

      if (this.heap[p] > this.heap[i]) {
        this.swap(i, p); // parent bigger → swap!
        i = p;  // move up
      } else {
        break;  // heap property satisfied ✅
      }
    }
  }

  bubbleDown(i) {
    let n = this.heap.length;
        while(true) {

            let left = this.leftChild(i);
            let right = this.rightChild(i);

            let smallest = i;

             // find smallest among parent, left, right
            if(left < n && this.heap[smallest] > this.heap[left]) smallest = left;
            if(right < n && this.heap[smallest] > this.heap[right]) smallest = right;

            if(smallest != i) {
                this.swap(i, smallest); // swap with smallest child
                i = smallest; // move down
            } else {
                break; // heap property satisfied ✅
            }
        }
  }

  // Extract Min — O(log n)
  extractMin() {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0]; // save root
    this.heap[0] = this.heap.pop(); // move last to root
    this.bubbleDown(0); // restore heap
    return min;
  }
}
/*
// Usage
const heap = new MinHeap();
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
console.log(heap.peek()); // 1 (minimum!)
console.log(heap.extractMin()); // 1
console.log(heap.heap);
console.log(heap.extractMin()); // 3
console.log(heap.heap);
console.log(heap.extractMin()); // 4
console.log(heap.heap);
*/