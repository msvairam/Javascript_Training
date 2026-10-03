/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // my approach - 100%
    let xor = 0;

    for(let i =0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
};

console.log(singleNumber([4,1,2,1,2]));