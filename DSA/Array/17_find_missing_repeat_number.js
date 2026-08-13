const arr = [4, 3, 6, 2, 1, 1];

function findMissingRepeatNumber(arr) {
    const n = arr.length;
    const SN = (n * (n+1))/2; // Sum of 1 to 6  = y
    const S2N = (n* (n+1) * (2*n+1))/6; // Square Sum of 1 to 6 = y2

    let S = 0; // x
    let S2 = 0; // x2

    for(let i = 0; i < n; i++) {
        S += arr[i]; 
        S2 += arr[i] * arr[i];
    }
    let x_y = S - SN; // x - y
    let x2_y2 = S2 - S2N; // x2 - y2
    let x_sum_y = x2_y2 / x_y; // (x + y) = (x2-y2) / (x-y); // (x2-y2) = (x+y)(x-y)
    const x = (x_y + x_sum_y)/2; // (x - y) + (x + y) = val1 + val2;
    const y = x_sum_y - x; // (x + y) = val2
    return {x, y};
}

console.log(findMissingRepeatNumber(arr)); 