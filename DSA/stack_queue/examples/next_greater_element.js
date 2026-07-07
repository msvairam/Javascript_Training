function nextGreaterElement(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];

    for(let i =0; i < nums.length; i++) {

        while(stack.length && nums[stack[stack.length -1]] < nums[i]) {
            const idx = stack.pop();
            result[idx] = nums[i];
        }
        stack.push(i);                                                           
    }
    return result;
}

console.log(nextGreaterElement([4, 12, 3,1,2,5]));