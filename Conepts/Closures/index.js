/*function x() {
    var a = 5; // Store in Closure.  Closure Variable of Y() function.
    function y() {
        console.log(a);
        {
            // Local Scope this and window
            let a = 10; // Store in Block. Block Statment
            console.log(a); 
        }
    }
    return y;
}

const z = x(); //  Store in Script . Special Memory Space. Because of Const or Let
z();

// Global Scope*/

function x() {
    let a = 10;

    function b() {
        let b = 10;
       // let a = 15;
        {
            let b = 15;
            console.log(a, b);
        }
    }
    return b;
}

const z = x();
z();