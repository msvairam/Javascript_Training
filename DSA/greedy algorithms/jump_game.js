/* Problem: Given array where each element = max jump length,

can you reach the last index? */

function canJump(arr) {
    let maxIndex = 0;

    for(let i =0; i < arr.length; i++) {

        if (i > maxIndex) return false;

        maxIndex = Math.max(maxIndex, i + arr[i]);
    }

    return true;
}

console.log(canJump([2, 3, 1, 1, 4])); // true ✅
console.log(canJump([3, 2, 1, 0, 4])); // false ❌