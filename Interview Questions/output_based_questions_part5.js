let a = {};
let b = { key: 'b'};
let c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a); // { '[object Object']': 456 }
console.log(a[b]); // 456

//-------------------

function show() {
    {
        var x =10;
        var y = 11;
    }
    console.log(x, y);
}
show();

//-----------------

console.log(func) // undefined
//func(); // func is not a function
var func = function() {
    console.log('Hello');
}

//------
// Write code for promise without new keyword

Promise.resolve('Promise without new keyword').then(console.log);

async function promiseFunction() {
    return await 'vairam';
}

const data = await promiseFunction();
console.log(data);