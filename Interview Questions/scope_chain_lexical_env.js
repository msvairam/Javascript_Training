// scope chain & lexical environment
// variable having access in its parent scope
// inner function me outer function ke scope ka access hota hai. -- lexical scope

// Lexical environment = local memory + lexical environment of parent


function outer() {
    let username = 'vairamuthu';

    function inner() {
        let secrat = 'msvairam';
        console.log('inner', username);
        console.log('secrat', secrat);
    }

    function innerTwo() {
        console.log('inner Two', username);
    }
    inner();
    innerTwo();
}

outer();

//console.log(x);

if (Math.random() > 0.5) {
    let x = 1;
} else {
    let x =2;
}

//console.log(x);

function a() {
    var x = 10;
    console.log(x);
    b();
    function b() {
        console.log(y);
    }
}

var y = 20;
var x = 30;
a();