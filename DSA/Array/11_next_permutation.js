function findNextPermutation(arr) {
    let index = -1;
    let n = arr.length;
    for (let i = n-2; i >=0; i--) {
        if(arr[i] < arr[i+1]) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        return arr.reverse();
    }
    
    for(let i = n -1; i > index; i--) {
        if(arr[index] < arr[i]) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            break;
        }
    }
    return [...arr.slice(0, index+1), ...arr.slice(index +1, n).reverse()];
}
const arr = [2, 1, 5, 4, 3, 0, 0];
//const arr = [3,1,2];
console.log(findNextPermutation(arr));
