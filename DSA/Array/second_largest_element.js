function secondLargestElement(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            secondLargest = largest
            largest = arr[i];  
        } else if(arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

function secondSmallestElement(arr) {
    let n = arr.length;
    let smallest = arr[0];
    let secondSmallest = Infinity;

    for(let i = 0; i < n; i++) {
        if(arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i]
        } else if(arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i];
        }
    }
    return secondSmallest;
}

//let arr = [1, 2, 4, 7, 7, 5, -2, -5];
let arr = [-2, -5, -4, -7, -9];
console.log(secondLargestElement(arr));
console.log(secondSmallestElement(arr));