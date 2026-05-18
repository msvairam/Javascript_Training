/* What is Merge Sort?
Merge Sort is a Divide and Conquer algorithm that:

Divides the array into two halves
Recursively sorts each half
Merges the two sorted halves back together 

Level 0:  [38, 27, 43, 3, 9, 82, 10]   → 1 array
Level 1:  [38,27,43]  [3,9,82,10]       → 2 arrays
Level 2:  [38,27][43] [3,9][82,10]      → 4 arrays
Level 3:  [38][27][43][3][9][82][10]    → 7 arrays (base case)

1. Show the DIVIDE steps  → split until single elements
2. Show the MERGE steps   → merge back in sorted order
3. Final sorted array
4. How many levels of dividing?
5. Why is Merge Sort better than Bubble Sort for large arrays?

mergeSort([38, 27, 43, 3])

// DIVIDE
mergeSort([38, 27])
  mergeSort([38]) → [38]  // base case
  mergeSort([27]) → [27]  // base case
  merge([38], [27])
    27 < 38 → pick 27
    pick 38
    → [27, 38] ✅

mergeSort([43, 3])
  mergeSort([43]) → [43]  // base case
  mergeSort([3])  → [3]   // base case
  merge([43], [3])
    3 < 43 → pick 3
    pick 43
    → [3, 43] ✅

// MERGE FINAL
merge([27, 38], [3, 43])
  3  < 27 → pick 3   → [3]
  27 < 43 → pick 27  → [3, 27]
  38 < 43 → pick 38  → [3, 27, 38]
  pick 43            → [3, 27, 38, 43] ✅
*/

function mergeSort(arr) {
    // Base case: array of 1 is already sorted
    if (arr.length <= 1) return arr;

      // Step 1: Find middle
    const mid = Math.floor(arr.length / 2);

      // Step 2: Recursively sort both halves
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

      // Step 3: Merge sorted halves
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;  // pointer for left
    let j = 0; // pointer for right

    // Compare elements and pick smaller
    while(i < left.length && j  < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);  // left is smaller
            i++;
        } else if(right[j] < left[i]) {
            result.push(right[j]);  // right is smaller
            j++;
        }
    }

      // Add remaining elements
    while(i < left.length) result.push(left[i++]);
    while(j < right.length) result.push(right[j++]);

    return result;
}


console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); 
// [3, 9, 10, 27, 38, 43, 82] ✅
