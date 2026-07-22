function leftRotateOnePlace(arr) {
    let firstEle = arr[0];
    let n = arr.length;

    for(let i = 1;  i < n; i++) {
        arr[i -1] = arr[i];
    }
    arr[n - 1] = firstEle;
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(leftRotateOnePlace(arr));