function slidingWindowMax(arr, k) {
    const duque = [];
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        duque.push(arr[i]);
        if (duque.length > k) {
             duque.shift();
        }

        if (duque.length === k) {
            result.push(Math.max(...duque));
        }
    }
    return result;
}
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 2, 1, 6], 2));
