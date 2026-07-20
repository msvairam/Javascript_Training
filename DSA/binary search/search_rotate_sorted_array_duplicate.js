function find(arr, target) {
    let lo = 0;
    let hg = arr.length -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg)/2);
        if (arr[mid] == target) return mid;
        if (arr[lo] === arr[mid] && arr[mid] === arr[hg]) {
            lo++;
            hg--;
            continue;
        };

        if(arr[lo] <= arr[mid]) {
            if (arr[lo] <= target && target <= arr[mid]) {
                hg = mid -1;
            } else {
                lo = mid +1;
            }
        } else if(arr[hg] >= arr[mid]) {
            if(arr[hg] >= target && target >= arr[mid]) {
                lo = mid + 1;
            } else {
                hg = mid - 1;
            }
        }
    }
    return -1;
}

let arr = [3, 1, 2, 3, 3, 3, 3, 3];
console.log(find(arr, 1));