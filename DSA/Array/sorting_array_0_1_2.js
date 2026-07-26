/*

Detch National flag Alogrithm

[0, low -1] => 0
[low, mid - 1] => 1
[mid, high - 1] => Unsorted
[high, n -1] => 2

*/

function sortArray(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high) {
        if(arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if(arr[mid] === 1) {
            mid++;
        } else if(arr[mid] === 2) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0];
sortArray(arr);
console.log(arr);