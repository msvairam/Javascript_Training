function findMinimum(arr) {
    let lo =0;
    let hg = arr.length -1;
    let ans = Infinity;

    while(lo <= hg) {
        const mid  = Math.floor((lo + hg) /2);

        if(arr[lo] <= arr[hg]) {
            ans = Math.min(ans, arr[lo]);
            break;
        }

        if(arr[lo] <= arr[mid]) {
            ans = Math.min(ans, arr[lo])
            lo = mid + 1;
        } else {
            ans = Math.min(ans, arr[mid]);
            hg =  mid -1;
        }
    }
    return ans;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
//let arr = [4, 5, 1, 2, 3];
console.log(findMinimum(arr));