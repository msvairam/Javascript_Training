const MinHeap = require('./min_heap.js');

function kthLargest(nums, k) {
    const minHeap = new MinHeap.MinHeap();

    for(let num of nums) {
        minHeap.insert(num);

        // keep only k elements in heap
        if (minHeap.size() > k) {
            minHeap.extractMin(); // remove smallest
        }
         console.log(minHeap.heap);
    }


    return minHeap.peek(); // root = kth largest!
}

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log('-------')
console.log(kthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4