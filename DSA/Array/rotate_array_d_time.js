// Simple 
function rotate_array_d_times(arr, d) {
    return [...arr.slice(0, d).reverse(),...arr.slice(d, arr.length).reverse()].reverse(); // O(n);

    // O(2n)
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(rotate_array_d_times(arr, 4));