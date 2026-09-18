var isPalidrome = function(x) {
    if(x < 0) return false;
    
    let originalValue = x;
    let reversedNumber = 0;
    x = Math.abs(x);
    while(x > 0) {
        let lastDigit = x%10;
        x = Math.floor(x/10);

        reversedNumber = (10 * reversedNumber) + lastDigit; 
    }
    console.log(reversedNumber);
    return reversedNumber === originalValue;
};

console.log(isPalidrome(-121));