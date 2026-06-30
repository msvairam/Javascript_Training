function subarraysWithSumK(arr, k) {
    const result = [];

    for(let i = 0; i < arr.length; i++) {
        let sum = 0;

        for(let j =  i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === k) {
                result.push(arr.slice(i, j + 1));
            }

           if(sum > k) break;
        }
    }
    return result;
}
console.log(subarraysWithSumK([1, 2, 3, 4, 2, 5, 1], 6));