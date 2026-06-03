function flatternArray(arr) {
    let result = [];

    for (element of arr) {
        if (Array.isArray(element)) {
              // recursive call for nested array
            result = [...result, ...flatternArray(element)];
        } else {
            result.push(element);  // base case: not array
        }
    }
    return result;
}

console.log(flatternArray([1, [2, [3, [4]], 5]]));