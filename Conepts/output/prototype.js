function A() {
    this.value =  42;
}

A.prototype.getValue =  function() {
    return this.value;
}

function B() {
    A.call(this);
    A.prototype.getValue();
    this.value = 24;
}

B.prototype = Object.create(A.prototype);
//B.prototype.constructor = B;

const b =  new B();
console.log(b.getValue());
console.log(b);
console.log(A.prototype);
const a = new A();
console.log(a);