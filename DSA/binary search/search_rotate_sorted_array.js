function search(arr, target) {
    let lo = 0;
    let hg = arr.length -1;
    
    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] === target) {
            return mid;
        } else if(arr[lo] <= arr[mid]) { // Check the Left part is sorted
            if (arr[lo] <= target && target <= arr[mid]) { // If sorted? Check Is it there inside the array
                hg = mid - 1;
            } else {
                lo = mid + 1;
            }
        } else if(arr[hg] >= arr[mid]) { // check the right part is sorted
            if(arr[mid] <= target && target <= arr[hg]) { // If sorted? Check Is it there inside the array
                lo = mid +1;
            } else {
                hg = mid - 1;
            }
        }
    }
    return -1;
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
console.log(search(arr,1));