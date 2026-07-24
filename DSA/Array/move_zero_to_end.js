// My approach
function moveZeroToEnd(arr) {
   let left = 0;
   
   for(let i =0; i < arr.length; i++) {
        if(arr[left] === 0 && arr[i] !== 0) {
            [arr[left], arr[i]] = [arr[i], arr[left]];
            left++;
        } else if(arr[left] !== 0) {
            left++;
        }
   }
   return arr;
}

// Expert Approach
function moveZeroToEnd2(arr) {
    let j = -1;
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] === 0){
            j = i;
            break;
        }
    }

    if(j === -1) return arr;

    for(let i = j+1; i < n;  i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }
    return arr;
}

console.log(moveZeroToEnd([0, 1, 2, 3, 2, 4, 5, 1, 0, 0]));