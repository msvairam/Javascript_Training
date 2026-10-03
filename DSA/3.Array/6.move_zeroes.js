//let nums = [0, 1, 0, 3, 12];
let nums = [1, 1, 4, 3, 12, 0];

var moveZeroes1 = function(nums) { // 36 %
     let x = null;

    for(let i = 0; i < nums.length; i++) {
        if(x !== null && nums[i] != 0) {
            [nums[x], nums[i]] = [nums[i], nums[x]];
            x++;
        } else if(x === null && nums[i] === 0) {
            x = i;
        } 
    }
};


function moveZeroes1(nums) { // Other Simple Approach 100%
   let x = 0;

   for (let i =0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[x] = nums[i];
        x++;
    }
   }

   for(let j = x; j < nums.length; j++) {
        nums[j] = 0;
   }
}

function moveZeroes(nums) {

    let j = -1;

    for(let i = 0 ; i < nums.length; i++) {
        if(nums[i] === 0) {
            j = i;
            break;
        }
    }

    if(j === -1) return;

    for(let k = j+1; k < nums.length; k++) {
        if(nums[k] !== 0) {
            [nums[j], nums[k]] = [nums[k], nums[j]];
            j++;
        }
    }
}

moveZeroes(nums);
console.log(nums);