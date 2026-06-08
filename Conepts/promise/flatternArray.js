const a = [1, 2, 3, [4, [5, 6]], 7, 8];
function flatternArray(arr) {
    const result= [];

    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flatternArray(item)); // Recursion Case
        } else {
            result.push(item); // Base Case
        }
    }
    return result;
}

console.log(flatternArray(a));