class Node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if(!this.root) {
            this.root = new Node(val);
            return this;
        }

        let current = this.root;

        if(current.val === val) return this;
        
        while(current) {
            if(current.val > val) {

                if(!current.left) {
                    current.left = new Node(val);
                    return this;
                }
                current = current.left;
            }
            
            if(current.val < val) {
                if(!current.right) {
                    current.right = new Node(val);
                    return this;
                }
                current = current.right;
            }
        } 
    }

    order(order, node = this.root, result = []) {
    if (node) {
      if (order == "in") {
        this.order(order, node.left, result);
        result.push(node.val);
        this.order(order, node.right, result);
      } else if (order == "pre") {
        result.push(node.val);
        this.order(order, node.left, result);
        this.order(order, node.right, result);
      } else if (order == "post") {
        this.order(order, node.left, result);
        this.order(order, node.right, result);
        result.push(node.val);
      } else {
        console.log("Invalid Order");
      }
    }
        return result;
}
}

const bst = new BST();

bst.insert(10);
bst.insert(6);
bst.insert(11);
bst.insert(5);
bst.insert(7);
bst.insert(8);
bst.insert(12);
const root = bst.root;

console.log(bst.order('in'));

console.log(kthSmallest(root, 0, 3));

function findKthSmallestLargest(root, k) {

  // Kth smallest → inorder (Left → Root → Right)
  function kthSmallest(node, state) {
    if (!node) return;

    kthSmallest(node.left, state);        // go LEFT first

    if (++state.count === k) {  
        state.result = node.val;          // count visit
         return;
    }

    kthSmallest(node.right, state);       // go RIGHT last
  }

  // Kth largest → reverse inorder (Right → Root → Left)
  function kthLargest(node, state) {
    if (!node) return;

    kthLargest(node.right, state);        // go RIGHT first

    if (++state.count === k) {            // count visit
      state.result = node.val;            // kth found!
      return 
    }

    kthLargest(node.left, state);         // go LEFT last
  }

  const s1 = { count: 0, result: null };
  const s2 = { count: 0, result: null };

  kthSmallest(root, s1, 0);
  kthLargest(root, s2);

  return [s1.result, s2.result];
}

console.log(findKthSmallestLargest(root, 3))
