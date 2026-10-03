/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber1 = function(nums) { // my approach - 100%
    let xor = 0;
    let xor2 = 0;
    for(let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
        xor2 = xor2 ^ (i+1);
    }
    return xor ^ xor2;
};

var missingNumber = function(nums) { // my approach - 68%
    let sum = 0;
    let n  = nums.length;
    let total = (n*(n+1))/2;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return total - sum;
}


console.log(missingNumber([0,1,2,4,5]));