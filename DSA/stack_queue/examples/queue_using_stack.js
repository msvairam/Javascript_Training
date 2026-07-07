class QueueUsingStacks {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    enqueue(val) {
        this.s1.push(val);
    }

    dequeue() {
        if(this.s2.length === 0) {
            while(this.s1.length) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2.pop();
    }

    peek() {
          if(this.s2.length === 0) {
            while(this.s1.length) {
                this.s2.push(this.s1.pop());
            }
        }
        return this.s2[this.s2.length -1];
    }
}

const q = new QueueUsingStacks();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.dequeue()); // 1 ✅ FIFO!
console.log(q.dequeue()); // 2 ✅
console.log(q.peek());    // 3 ✅
q.s2 = [];
q.enqueue(1);
console.log(q.peek());    // 1 ✅

/*
Enqueue 1,2,3:
s1 = [1, 2, 3]   s2 = []

Dequeue (s2 empty → transfer s1 to s2):
s1 = []   s2 = [3, 2, 1]
pop s2 → 1 ✅ (FIFO!)

Dequeue again:
s2 = [3, 2] → pop → 2 ✅ */