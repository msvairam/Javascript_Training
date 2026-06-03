function sumArray(arr, index = 0) {
    // Base Case
    if(index + 1 == arr.length) return 0;

    // Recursion Case
    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15