function findPeak(arr) {
    let n = arr.length;
    if(n === 1) return arr[0];

    let peak = Math.max(arr[0], arr[n -1]);
    let lo = 1;
    let hg = n - 2;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

         if(arr[mid - 1] >= arr[mid]) {
            hg  = mid - 1;
        } else if(arr[mid + 1] >= arr[mid]) {
            lo = mid + 1;
        } else {
            peak =Math.max(peak, arr[mid]);
            return peak;
        }
    }
    return peak;
}

let arr= [1,2,3,4,5,6,7,8,5,1];
let arr1 = [1, 10, 13, 7, 6, 5, 4, 2, 1, 0];
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let arr3 = [16,2,3,4,5,6,7,8,9,10];
console.log(findPeak(arr));