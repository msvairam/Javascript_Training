class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    if (value === current.value) return this;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  delete(value, node = this.root, parent = null) {
    if (!node) {
      return false;
    }

    if(value < node.value) {
      return this.delete(value, node.left, node);
    } else if(value > node.value) {
      return this.delete(value, node.right, node);
    } else {
      // Found the Value
      //CASE 3: Two children
      if(node.right && node.left) {
        // Find inorder Success => next larget number
        let successor = node.right;
        while(successor.left) successor = successor.left;
        node.value = successor.value;
        return this.delete(successor.value, node.right, node);
      }

      // CASE 1 & 2;

      const child = node.right || node.left;

      if(!parent) {
        this.root = child; // deleting root;
      } else if(parent.left == node) {
        parent.left = child; // bypass Node;
      } else {
        parent.right = child;
      }
      return true;
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) return true;
      current = current.value > value ? current.left : current.right;
    }
  }
  // Inorder → Left, Root, Right (gives sorted output)
  // Preorder → Root, Left, Right
  // Postorder → Left, Right, Root
  order(order, node = this.root, result = []) {
    if (node) {
      if (order == "in") {
        this.order(order, node.left, result);
        result.push(node.value);
        this.order(order, node.right, result);
      } else if (order == "pre") {
        result.push(node.value);
        this.order(order, node.left, result);
        this.order(order, node.right, result);
      } else if (order == "post") {
        this.order(order, node.left, result);
        this.order(order, node.right, result);
        result.push(node.value);
      } else {
        console.log("Invalid Order");
      }
    }

    return result;
  }
}

const bst = new BTS();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7));
console.log(bst.search(99));

console.log(bst.root);
console.log(bst.order("in")); // ✅ Sorted!
console.log(bst.order("pre"));
console.log(bst.delete(5));
console.log(bst.order("post"));
