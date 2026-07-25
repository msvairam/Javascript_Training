function max_consecutive_one(arr) {
    let count = 0;
    let maxCount = 0;

    for(let i =0; i < arr.length - 1; i++) {
        if(arr[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
}

let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(max_consecutive_one(arr));