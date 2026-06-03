function smallestSubarray(arr, target) {
  let left = 0; // window start
  let minLen = Infinity; // smallest length found
  let windowSum = 0; // current window sum

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]; // → expand window

    while (windowSum >= target) {
      // condition met?
      minLen = Math.min(minLen, right - left + 1); // record length
      windowSum -= arr[left]; // shrink ←
      left++; // move left forward
    }
  }

  return minLen == Infinity ? 0 : minLen;
}

console.log(smallestSubarray([1, 1, 5, 2, 3, 2], 7)); // 2 (5+2)
console.log(smallestSubarray([2, 1, 5, 2, 8], 7)); // 1 (8)
