function findLargestElement(arr) {
    let n = arr.length;
    if (n === 0) return NaN;
    if (n === 1) return arr[0];
    let largest = arr[0];

    for(let i = 1; i < n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [3,2,1,5,2];
console.log(findLargestElement(arr));