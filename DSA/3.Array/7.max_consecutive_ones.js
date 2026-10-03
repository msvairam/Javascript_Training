var findMaxConsecutiveOnes1 = function(nums) { // my approach
    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            maxCount = Math.max(count, maxCount);
        } else {
           count = 0;
        }
    }
    return maxCount;
};


var findMaxConsecutiveOnes = function(nums) { // Other approach
    let count = 0;
    let maxCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            count++;
            
        } else {
           count = 0;
           maxCount = Math.max(count, maxCount);
        }
    }
    return maxCount = Math.max(count, maxCount);;
};

console.log(findMaxConsecutiveOnes( [0,1,1,0,1,1,1]));