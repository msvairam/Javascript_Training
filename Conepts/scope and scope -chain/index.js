function a()  { // Local + Lexical Reference of Global + Lexical Refernce of NULL;
    var b  = 10;
    c();    
    function c() { //  Local + Lexical Reference of a() + Lexical Reference of Global
        var d = 10; 
        f();
        function f() {
            console.log(b); // Local + Lexical Reference of c() + Lexical Reference of a() + Global
            console.log(d);
        }
    }
}

//a();
//console.log(b) //  Global + Lexical Reference is NULL

function a() {
    var b = 10;
    function c() {
        console.log(b);
        function f() {
            console.log(b);
        }
        f();
    }
    c();

}
a();