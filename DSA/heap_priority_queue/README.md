1️⃣ What is a Heap?
A Heap is a special binary tree that satisfies the Heap Property:
Min Heap — parent is SMALLER than children
        1
       / \
      3   2
     / \ / \
    7  4 5  6

Parent always SMALLER than children ✅
Root = SMALLEST element always! ✅
Max Heap — parent is LARGER than children
        9
       / \
      7   8
     / \ / \
    3  4 5  6

Parent always LARGER than children ✅
Root = LARGEST element always! ✅

🔑 Heap is a Complete Binary Tree — all levels filled left to right!


2️⃣ What is a Priority Queue?
A Priority Queue is an abstract data structure where:

Each element has a priority
Element with highest priority is served first
Implemented using a Heap internally!

Regular Queue:  [1, 2, 3, 4, 5] → FIFO (first in first out)
Priority Queue: [1, 2, 3, 4, 5] → highest priority out first!

🔑 Min Heap → smallest priority out first
🔑 Max Heap → largest priority out first


3️⃣ Heap as an Array
Heap is stored as an array — not a tree! Indices map to tree positions:
        1          Index:  0
       / \
      3   2        Index:  1  2
     / \ / \
    7  4 5  6      Index:  3  4  5  6

Array: [1, 3, 2, 7, 4, 5, 6]
Index formulas:
Parent of i    = Math.floor((i - 1) / 2)
Left child     = 2 * i + 1
Right child    = 2 * i + 2

4️⃣ Core Operations
OperationTimeDescriptionInsertO(log n)Add at end → bubble upExtract Min/MaxO(log n)Remove root → bubble downPeekO(1)View root (min/max)HeapifyO(n)Build heap from arraySearchO(n)No direct access

5️⃣ Insert — Bubble Up
Insert 1 into Max Heap:
        9
       / \
      7   8
     /
    3

Step 1: Add 1 at end
        9
       / \
      7   8
     / \
    3   1

Step 2: Compare with parent
        1 < 7? → no swap needed ✅
Insert 10 into Max Heap:
Step 1: Add 10 at end
        9
       / \
      7   8
     / \
    3   10

Step 2: 10 > 7 → swap!
        9
       / \
      10  8
     / \
    3   7

Step 3: 10 > 9 → swap!
        10
       / \
      9   8
     / \
    3   7
✅ Heap property restored!

6️⃣ Extract — Bubble Down
Extract max (root=10) from Max Heap:
        10
       / \
      9   8
     / \
    3   7

Step 1: Remove root, move last element to root
        7
       / \
      9   8
     /
    3

Step 2: 7 < 9 → swap with larger child!
        9
       / \
      7   8
     /
    3

Step 3: 7 > 3 → no swap needed ✅
Extracted: 10 ✅

7️⃣ When to Use Heap?
✅ Find kth largest/smallest element
✅ Merge k sorted arrays
✅ Dijkstra's shortest path algorithm
✅ Task scheduling by priority
✅ Real-time median finding