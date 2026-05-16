// Implement custom reducer functions;

    Array.prototype.myReduce =  function(fn, initVal) {
        for(let i =0; i < this.length; i++) {
            initVal = fn.apply(null, [initVal, this[i]]);
        }
        return initVal;
    }

let init = 0

console.log([1,2,3].myReduce((acc, curr) => {return acc =  curr +acc }, init));

console.log([1,2,3].reduce((acc, curr) => {return acc =  curr +acc }, init)); 