class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAtTail(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  insertAtIndex(index, value) {
    if (index === 0) {
      return this.insertAtHead(value);
    }

    const newNode = new Node(value);

    let current = this.head;
    let i = 0;

    while (i < index - 1 && current) {
      current = current.next;
      i++;
    }

    if (!current) return;
    console.log(current);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  deleteAtHead() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.value;
  }

  deleteAtTail() {
    if (!this.head) return;

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }
    if (!current.next) return;
    current.next = null;
    this.length--;
  }

  deleteByValue(value) {
    if (!this.head) return;

    let current = this.head;

    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return true;
      }
      current = current.next;
    }
    return false; // not found
  }

  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value == value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  getHeader() {
    console.log(this.head);
  }

  reverse() {
    let prev = null;
    let current = this.head;

    while(current) {
        let next = current.next;
        current.next= prev;
        prev = current;
        current = next;
    } 
    this.head = prev;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" → "));
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) return true;
    }
    return false;
  }
}

const linked = new LinkedList();
linked.insertAtTail(10);
linked.insertAtTail(20);
linked.insertAtTail(30);
linked.insertAtHead(5);
linked.print();
linked.insertAtIndex(2, 60);
linked.print();
//console.log(linked.deleteAtHead());
linked.print();
//linked.deleteAtTail();
linked.print();
//linked.deleteByValue(60);
linked.print();
console.log(linked.search(20));
console.log(linked.reverse());
linked.print();
console.log(linked.hasCycle());
