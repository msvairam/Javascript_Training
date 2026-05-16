function a() {
    console.log(b); // 10;
    c();
    function c() {
        console.log(b); // 10
    }
}

var b = 10;
a();

/************************* */

function a() {
    console.log(b); // undefined;
    c();
    function c() {
        console.log(b); // undefined
    }
}

a();
var b = 10;

/****************************** */




