function firstOccur(arr, target, n) {
    let first = -1;
    let lo = 0;
    let hg = arr.length -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] === target) {
            first = mid;
            hg = mid - 1;
        } else if(arr[mid] >= target) {
            hg = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return first;
}

function lastOccur(arr, target) {
    let last = -1;
    let lo = 0;
    let hg = arr.length -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] === target) {
            last = mid;
            lo = mid + 1;
        } else if(arr[mid] <= target) {
            lo = mid + 1;
        } else {
            hg = mid -1;
        }
    }
    return last;
}


function firstAndLastOccur(arr, target, n) {

    const first = firstOccur(arr, target, n);
    if (first === -1) return [-1, -1];
    const last = lastOccur(arr, target, n);
    return [first, last];
}

let arr = [2, 8, 8, 8, 8, 8, 11, 13];
console.log(firstAndLastOccur(arr, 8));

let arr1 = [1, 3, 5, 5, 5, 5, 7, 123, 125 ];
console.log(firstAndLastOccur(arr1, 7));

let arr2 = [1, 2, 3];
console.log(firstAndLastOccur(arr2, 4));

