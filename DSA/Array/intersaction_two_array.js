let arr1 = [1, 2, 2, 3, 3, 4, 5, 6,7];
let arr2 = [2, 3, 3, 5, 6, 6, 7,9];

let i = 0;
let j = 0;
const result = [];

while(i < arr1.length && j < arr2.length) {
    let val = null;

    if(arr1[i] < arr2[j]) {
        i++;
    } else if(arr1[i] > arr2[j]) {
        j++;
    } else if(arr1[i] === arr2[j]) {
        val = arr1[i];
        j++;
        i++;
    }

    if(val && result[result.length - 1] !== val) {
        result.push(val);
    }
}

console.log(result);