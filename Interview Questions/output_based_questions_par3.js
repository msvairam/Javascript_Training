function a() {
    var b = 10;
    console.log(b);
    c();
    function c() {
        console.log(b);
    }
}


a();
console.log(b);