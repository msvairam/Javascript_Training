function binarySearch(arr, target) {
    let lo = 0;
    let hg = arr.length - 1;

    while (lo <= hg) {
        let mid = Math.floor((lo + hg) / 2);
        if(target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            lo = mid + 1;
        } else {
            hg = mid - 1;
        }
    }
    return -1;
}


console.log(binarySearch([1,3,5,7,9,11, 12, 16, 17], 7));  // 3 ✅
console.log(binarySearch([1,3,5,7,9,11], 6));  // -1 ✅

console.log(binarySearchRecursion([1,3,5,7,9,11, 12, 16, 17], 7));  // 3 ✅

function binarySearchRecursion(arr, target, lo = 0, hg = arr.length -1) {

    if (lo > hg) {
        return -1;
    }

    let mid = Math.floor((lo + hg) /2);

    if (arr[mid] === target) {
        return target;
    } else if(target > arr[mid]) {
        lo = mid + 1;
    } else {
        hg = mid - 1;
    }

    return binarySearchRecursion(arr, target, lo, hg);
}