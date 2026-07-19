function firstOccur(arr, target) {
    let lo = 0;
    let hg = arr.length -1;
    let first = -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] == target) {
            first = mid;
            hg = mid -1;
        } else if(arr[mid] >= target) {
            lo = mid + 1;
        } else {
            hg = mid - 1;
        }
    }
    return first;
}

function lastOccur(arr, target) {
    let lo = 0;
    let hg = arr.length - 1;
    let last = -1;

    while(lo <= hg) {
        const mid  = Math.floor((lo + hg) /2);

        if(arr[mid] === target) {
            last = mid;
            lo = mid +1;
        } else if(arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hg = mid - 1;
        }
    }
    return last;

}

function numberOfCount(arr, target) {
    const first = firstOccur(arr, target);
    if(first === -1) return 0;
    const last = lastOccur(arr, target);

    return last - first + 1;
}

let arr = [2, 8, 8, 8, 8, 8, 11, 13];
console.log(numberOfCount(arr, 8));