function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++; // need bigger sum → move left forward
    } else {
      right--; // need smaller sum → move right backward
    }
  }

  return null;
}

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [2, 4]
console.log(pairSum([1, 3, 5, 7, 9], 10)); // [1, 9]
