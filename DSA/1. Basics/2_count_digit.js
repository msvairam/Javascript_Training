function countDigit(n) {
    if(n === 0) { return 1; } // If n is 0, return 1;
    n = Math.abs(n); // Handle the negative numbers

    let count = 0;
    while(n > 0) {
        n = Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigit(-789));