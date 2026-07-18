function findFloor(arr, target) {
    let lo = 0;
    let hg = arr.length - 1;
    let n = -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] <= target) {
            n = arr[mid];
            lo = mid  + 1;
        } else {
            hg = mid - 1;
        }
    }
    return n;
}

function findCeil(arr, target) {
    let lo = 0;
    let hg = arr.length - 1;
    let n = -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg) /2);

        if(arr[mid] >= target) {
            n = arr[mid];
            hg = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return n;
}

let arr = [1, 2, 8, 10, 10, 12, 19], x = 11;
console.log(findFloor(arr, x));
console.log(findCeil(arr, x));

