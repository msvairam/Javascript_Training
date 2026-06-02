function removeDuplicates(arr1) {
    if(!arr1.length) return 0;

   const arr = arr1.toSorted();

    let slow = 0; // points to last unique element;

    for (let fast = 1; fast < arr.length; fast++) {
        if (arr[fast] != arr[slow]) {
             // found new unique element!
            slow++;
            arr[slow] = arr[fast]; // overwrite with unique value
        }
         // if same → just move fast forward (skip duplicate)
    }
    return arr.slice(0, slow + 1); // return unique part
}

// Order Preserved? ❌ No
const arr = [5, 5, 5, 2, 3, 4, 1, ];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4, 5]

function removeDuplicatesUnsorted(arr) {

    const arrSet = new Set();
    const result = [];

    for (num of arr) {
        if (!arrSet.has(num)) {
            arrSet.add(num);

        }
    }
    return [...arrSet];

}
// Order Preserved? ✅ Yes
const arr2 = [5, 5, 5, 2, 3, 4, 1, ];
console.log(removeDuplicatesUnsorted(arr2)); // [1, 2, 3, 4, 5]