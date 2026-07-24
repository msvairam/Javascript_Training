let arr1 = [1,1,2,3,4,5];
let arr2 = [2,3,4,4,5,6];

const n = Math.max(arr1.length, arr2.length);
const result = []
let j = 0;
let i = 0;


while(i < n || j < n) {
    let val = null;
    if(arr1[i] && !arr2[j]) {
        val = arr1[i];
        i++;
    } else if(!arr1[i] && arr2[j]) {
        val = arr2[j];
        j++;
    } else if(arr1[i] === arr2[j]) {
        val = arr1[i];
        i++;
        j++;
    }else if(arr1[i] < arr2[j]) {
        val =  arr1[i];
        i++;
    } else if(arr1[i] > arr2[j]) {
        val =  arr2[j];
        j++;
    }

    if(val && val !== result[result.length -1]) {
        result.push(val);
    }
}

console.log(result);