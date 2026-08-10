const input  = {
    A: (a,b,c) => a+b+c,
    B: (a,b,c) => a-b-c,
    C: (a, b,c) => a+b*c,
    D: {
        E: (a,b,c) => a+b+c
    }
};

function compute(a,b,c, obj = input) {
    for (const val in obj) {
        if (typeof(obj[val]) ===  'function') {
            obj[val] = obj[val](a,b,c);
        } else if(typeof(obj[val]) === 'object' && !Array.isArray(obj[val])) {
            obj[val] = compute(a,b,c, obj[val]);
        }
    }
    return obj; 
}

const op = compute(1,1,1);

console.log(op);