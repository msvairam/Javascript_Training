function findKRotation(arr) {
    let lo = 0;
    let hg = arr.length -1;
    let ans = Infinity;
    let index = -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[lo] <= arr[hg]) {
            ans = arr[lo];
            index = lo;
            break;
        }

        if(arr[lo] <= arr[mid]) {
           if(arr[lo] < ans) {
                ans = arr[lo];
                index = lo;
           } 
           lo = mid + 1;
        } else {
            if(arr[mid] <  ans) {
                ans = arr[mid];
                index = mid;
            }
            hg = mid - 1;
        }
    }
    return index;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
console.log(findKRotation(arr));