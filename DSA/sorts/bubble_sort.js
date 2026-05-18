function bubbleSort(arr) {
   let n = arr.length;

    for (let i =0;  i < n -1 ; i++) {
         let swapped = false;

         for(let j = 0; j < n - i - 1; j++ ) { // inner array
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // Swapped
                swapped = true;
            }
         }
         if(!swapped) break; // Sorted
    }

    return arr;
}

console.log(bubbleSort([64, 25, 12, 22, 11]));

let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a);