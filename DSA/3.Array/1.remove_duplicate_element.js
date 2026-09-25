const nums  = [0, 0, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
    let x = 0;
    
    for(let i =0; i < nums.length; i++) {
        if(nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i]; 
        }
    }
    console.log(nums);
    return x + 1;
}

console.log(removeDuplicates(nums));