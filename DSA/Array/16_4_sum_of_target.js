const arr = [1, 0, -1, 0, -2, 2];
//console.log(sumOf4Zero1(arr));
function sumOf4Zero1(arr) {
  // Brute
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = j; k < n; k++) {
        for (let l = k; l < n; l++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[l];
          if (sum === 0) {
            result.push([arr[i], arr[j], arr[k], arr[l]].sort());
          }
        }
      }
    }
  }
  console.log(result);
}
const arr1 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];
console.log(sumOf4Zero(arr1, 8));
function sumOf4Zero(arr, target) {
  arr.sort();
  const n = arr.length;
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    // if(arr[i] > target) break;

    for (let j = i + 1; j < n; j++) {
      if (j != i + 1 && arr[j] === arr[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        let sum = arr[i] + arr[j] + arr[k] + arr[l];

        if (sum === target) {
          result.push([arr[i], arr[j], arr[k], arr[l]]);
          k++;
          l--;

          while (k < l && arr[k] === arr[k - 1]) k++;
          while (k < l && arr[l] === arr[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return result;
}
