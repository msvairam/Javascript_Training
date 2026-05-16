/*
if(true) true; 
{ // Multiple statement of block. Compounded of statement.
    var a = 10;
    let b  = 20;
    const c  = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

*/
/*
var a  = 10 
function x(){
     // 10
    var a  = 20;
    console.log(a);
}
x();
console.log(a);

*//*
let a  = 10;
 {
    let a  = 20;
 }
 console.log(a); //10 */

/*
 let a  = 10;
 {
    var a = 20;
 }

 console.log(a); //  SyntaxError:  a  has been already declared.*/
/*
 var a  = 10;
 {
    let a = 20;
    console.log(a);
 }
 console.log(a); //10
 */
/*
{
let a  = 10 ;
    {
        let a = 20; 
        //console.log(a);
        {
            console.log(a);
            {
               // console.log(a);
                 a = 30;

            }
            
        }
        
    }
    /*{
       // console.log(a);
        a = 30;
    }*/
/*}


const a  = 30;
{
    const a  = 50;
}*/

/*
var a  = 10;
x();
function x() {
    var a = 20;
    z();
    function z() {
        y();
        function y() {
            console.log(a);
        }
    }
}

console.log(a);*/


