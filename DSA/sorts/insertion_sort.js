function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i]; // element to insert
    let j = i - 1;

    // shift elements right until correct position found
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current; // insert at correct position
  }

  return arr;
}

console.log(insertionSort([64, 25, 12, 22, 11]));

