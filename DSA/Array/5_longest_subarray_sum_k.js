function longestSubarraySumK(arr, k) {
    let maxLen = 0;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length - 1; right++) {
        windowSum += arr[right];

        while (windowSum >= k) {
            if (windowSum === k) {
                maxLen = Math.max(maxLen, right - left +1);
            }
            windowSum -= arr[left];
            left++;
        }
    }
    return maxLen;
}
let arr = [1, 2, 3, 1, 1, 1, 1, 3, 3];
console.log(longestSubarraySumK(arr, 6));