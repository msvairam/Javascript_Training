// (even, odd) => Element is right side >> Elimated the left side
// (odd, even) => Element is left side >> Elimate the right side

function findSingleElement(arr) {
    let n = arr.length - 1;

    if(n == 0) return NaN;
    if(n == 1) return arr[0];
    if(arr[0] !== arr[1]) return arr[0];
    if(arr[n] !== arr[n -1]) return arr[n];
    let lo = 1;
    let hg = n -1;

    while(lo <= hg) {
        const mid = Math.floor((lo + hg)/2);

        if(arr[mid + 1] !== arr[mid] && arr[mid - 1] !== arr[mid]) {
            return arr[mid];
        }

        // (even, odd) if mid is odd, then check mid - 1 should be equal, if mid is even then check mid  + 1 should be equal
        if(((mid % 2) == 1 && arr[mid - 1] === arr[mid]) || (mid % 2) === 0 && arr[mid + 1] === arr[mid]) {
            lo = mid + 1;
        } else {
            hg = mid - 1;
        }


       /* My Approach if(arr[mid] === arr[mid -1] &&  arr[mid] !== arr[mid + 1]) { // Element in right side 

             if((mid - 1) % 2 === 0) { // check even
                lo = mid + 1;
             } else {
                hg = mid - 1;
             }
        } else if (arr[mid] !== arr[mid -1] &&  arr[mid] === arr[mid + 1]) { // Element in 
            if((mid + 1) % 2 === 0) { // check even
                hg = mid - 1 ;
             } else {
                lo = mid + 1;
             }
        } else {
            return arr[mid];
            break;
        } */
    }
    return -1;
}

let arr = [1,1, 2,2, 3,3, 4, 5,5, 6,6];
console.log(findSingleElement(arr));
