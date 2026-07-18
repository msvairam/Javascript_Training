// Lower bound algorithm using binary search
function searchInsertIndex(arr, target) {
    let lo = 0;
    let hg = arr.length - 1;
    let ans = arr.length;

    while(lo <= hg) {
        const mid  = Math.floor((lo + hg) / 2);

        if(arr[mid] >= target) {
            ans = mid;
            hg = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
}

  let arr = [ 5, 6, 7, 9, 10 ];

  console.log(searchInsertIndex(arr, 3)); // 0
    console.log(searchInsertIndex(arr, 8)); // 3
        console.log(searchInsertIndex(arr, 11)); // 5