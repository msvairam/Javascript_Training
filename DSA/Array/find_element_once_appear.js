function findElementOnceAppear(arr) {
    let xor = 0;
    for(let i =0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;
}
let arr = [1, 1, 2, 3, 3, 4, 4];
console.log(findElementOnceAppear(arr));