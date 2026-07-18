function lowerBound(arr, target, n) {
    let lo = 0;
    let hg = n - 1;
    let ans = n;

    while(lo <= hg) {
        const mid  = Math.floor((lo + hg) / 2);

        if (arr[mid] >= target) {
            ans = mid;
            hg = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return ans;
}


console.log(lowerBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 8, 10));

