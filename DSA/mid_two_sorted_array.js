function findMedianSortedArrays(nums1, nums2) {
  if (!nums1.length && !nums2.length) {
    return 0;
  }

  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  // [2], [1, 3]
  const m = nums1.length;
  const n = nums2.length;
  const half = Math.floor((m + n + 1) / 2);

  let lo = 0;
  let hi = m;

  while (lo <= hi) {
    let i = Math.floor((lo + hi + 1) / 2);
    let j = half - i;

    let maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    let minRight1 = i === m ? Infinity : nums[i];

    let maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    let minRight2 = j === n ? Infinity : nums2[j];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((m % n) % 2 == 1) {
        return Math.max(maxLeft1 + maxLeft2);
      } else {
        return (
          (Math.max(maxLeft1 + maxLeft2) + Math.min(minRight1 + minRight2)) / 2
        );
      }
    } else if (maxLeft1 > minRight2) {
      hi = i - 1;
    } else {
      lo = i + 1;
    }
  }

  return 0;
}

//console.log(findMedianSortedArrays([1,3,5,7], [2,4,6,8])); // 4.5
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
