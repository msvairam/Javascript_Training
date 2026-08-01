function isExistPairSum(arr, target) { // We sorted, So index changed, We can take index for value.
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length -1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return 'YES';
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return 'NO';
}

let arr = [2, 6, 5, 8, 11];
let target = 14;
console.log(isExistPairSum(arr, target));
let arr1 = [2, 6, 5, 8, 11];
console.log(findPairSum(arr1, target));

function findPairSum(arr, target) {
    const matchMap = new Map();

    for(let i =0; i< arr.length;  i++) {
        const balance = target - arr[i];
        if(matchMap.has(balance)) {
            return [matchMap.get(balance), i];
        } else {
            matchMap.set(arr[i], i);
        }
    }
    return [-1, -1];
}


