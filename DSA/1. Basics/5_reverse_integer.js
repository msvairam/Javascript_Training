function reverse(x) {

    // let sign = Math.sign(x); Alternative approach
    let copyX = x;
    x = Math.abs(x);
    let reverse = 0;
    while(x > 0) {
        let lastDigit = x%10;
        reverse = (reverse * 10) + lastDigit;
        x = Math.floor(x/10); // Important
    }

    //let limit = Math.pow(2, 31); Alternative approach
    let limit = 2**31;

    if(reverse > limit) return 0;

    return copyX < 0 ? -reverse: reverse;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));