class Node {
    constructor(key, value) {
        this.value = value;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}

class LRU {
    map = new Map();
    constructor(capacity) {
        this.capacity = capacity;
        this.trail = new Node(-1, -1);
        this.header = new Node(-1, -1);
        this.trail.prev = this.header;
        this.header.next = this.trail;
        this.length = 0;
    }

    put(key, value) {
        if (this.map.get(key)) {
            const node = this.map.get(key);
            node.value = value;

            this.deleteNode(node);
            this.insertAfterHeader(node);

        } else if(this.length < this.capacity) {
        
            const node = new Node(key, value);
            this.insertAfterHeader(node);
        } else if(this.length >= this.capacity) {
            const trailNode = this.trail.prev;

            this.deleteNode(trailNode);
            this.map.delete(trailNode.key);

             const node = new Node(key, value);
            this.insertAfterHeader(node);
        }
    }

    get(key) {
        if(this.map.has(key)) {
            let selectedNode = this.map.get(key);

            if (!selectedNode.prev.prev) {
                console.log(`already recent value ${selectedNode.value}`);
                return;
            }
            this.deleteNode(selectedNode);
            this.insertAfterHeader(selectedNode);
        } else {
            console.log('Not exist');
        }
    }

    insertAfterHeader(node) {
        const header = this.header;

        node.prev = header;
        node.next = header.next;

        header.next.prev = node;
        header.next = node;

        this.length++;
        this.map.set(node.key, node);
    }

    deleteNode(node) {
       const prevNode = node.prev;
       const nextNode = node.next;

       prevNode.next = nextNode;
       nextNode.prev = prevNode;
    }

  print() {
    let current = this.header;
    let result = [];
    while (current) {
      result.push(current.key);
      current = current.next;
    }
    console.log(result.join(" → "));
  }
}

const lru = new LRU(4);


lru.put(2,6);
lru.put(4,7);
lru.put(8,11);
lru.put(7,10);
lru.get(2);
console.log(lru.print());
lru.get(8);
console.log(lru.print());
lru.put(5,6);
console.log(lru.print());
lru.get(7);
console.log(lru.print());
lru.put(5,7);
console.log(lru.print());
console.log([...lru.map.values()]);
