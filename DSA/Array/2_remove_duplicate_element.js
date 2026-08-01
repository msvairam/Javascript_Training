function removeDuplicateElement(arr) {
    let left = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[left]) {
            left++;
            arr[left] = arr[i];
        }
    }
    return arr.slice(0, left + 1);
}

let arr = [1, 1, 2, 2, 2, 3, 3];
console.log(removeDuplicateElement(arr));
