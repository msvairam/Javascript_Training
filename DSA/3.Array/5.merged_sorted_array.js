let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let m = 3;
let n = 3;

function mergeSortedArray(nums1, m, nums2, n) { // my approach
    const copyNums1 = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;


    for(let i = 0; i < (m+n); i++) {
        if (!copyNums1[p1] && nums2[p2]) {
            nums1[i] = nums2[p2];
            p2++;
        } else if(copyNums1[p1] && !nums2[p2]) {
            nums1[i] = copyNums1[p1];
            p1++;
        } else if(copyNums1[p1] < nums2[p2]) {
            nums1[i] = copyNums1[p1];
            p1++;
        } else if(copyNums1[p1] > nums2[p2]) {
            nums1[i] = nums2[p2];
            p2++;
        } else if(copyNums1[p1] === nums2[p2]){
            nums1[i] = copyNums1[p1];
            p1++;
        }
    }
    return nums1;
}

function mergeSortedArray1(nums1, m, nums2, n) { // my approach
    const copyNums1 = nums1.slice(0, m);
    let p1= 0;
    let p2 = 0;

    for(let i  =0;  i < (m+n); i++) {
        if (p2 >= n || (copyNums1[p1] < nums2[p2] && p1 < m)) {
            nums1[i] = copyNums1[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

//console.log(mergeSortedArray1(nums1, m, nums2, n));

function reverseMergeSortedArray(nums1, m, nums2, m) {
    let p1 = m -1;
    let p2 = n -1;

    for (let i = m + n -1; i >= 0; i--) {

        if(p2 < 0) {
            break;
        }

        if(p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}
console.log(reverseMergeSortedArray(nums1, m, nums2, n));