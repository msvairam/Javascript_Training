function maxSumFixed(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

     // build first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // slide window forward
    for(let i = k; i <  arr.length; i++) {
        windowSum += arr[i]; // add new element
        windowSum -= arr[i - k]; // remove old element

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxSumFixed([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)
console.log(maxSumFixed([1, 4, 2, 9, 7, 3], 4)); // 22 (4+2+9+7)