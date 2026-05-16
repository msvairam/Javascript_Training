
function test() {

    let count = 0;
    while(true) { // Infinite Loop. untill return or break;
        console.log(++count);
        if(count == 10) {
            return null;
        }
    }
}

function test1() {

    let count1 = 0;
    let check = true;

    while(check) { // Infinite Loop untill the check will false;
        console.log(++count1);
        if (count1 == 10) {
            check = false;
        }
    }
}

return false; // Return false, Not run next line
test();
test1();