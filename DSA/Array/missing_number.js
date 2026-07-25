function missingNumber(arr) {
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 0; i < arr.length - 1; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ arr.length;
    return xor1 ^ xor2;
}
let arr =  [1,2,3,5];
console.log(missingNumber(arr));