// Implement custom reducer functions;

Array.prototype.myReduce = function(fn, init) {
    for(let i =0; i < this.length; i++) {
        init = fn.apply(null, [init, this[i]]);
    }
    return init;
}

console.log([1,2,3].myReduce((acc, curr) => {
    acc = curr + acc;
    return acc;
}, 0));
