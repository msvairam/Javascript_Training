let arr = [3, 1, -2, -5, 2, -4];
let arrVar2 = [-1, 2, 3, 4, -3, 1];
let arr3 = [2, 4, 5, -1, -3, -4];
let arr2 = [3, 1, -2, -5, 2, -4];
let arr4 = [2, 4, 5, -1, -3, -4];
console.log(rearrangeElementBySign([...arrVar2]));

function rearrangeElementBySign1(arr) {
  const result = new Array(arr.length);
  let negIndex = 1;
  let posIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result[posIndex] = arr[i];
      posIndex += 2;
    } else {
      result[negIndex] = arr[i];
      negIndex += 2;
    }
  }
  return result;
}

function rearrangeElementBySign(nums) {
  const posValues = nums.filter((num) => num > 0);
  const negValues = nums.filter((num) => num < 0);
  const result = new Array(nums.length);

  if (posValues.length < negValues.length) {
    for (let i = 0; i < posValues.length; i++) {
      result[i * 2] = posValues[i];
      result[i * 2 + 1] = negValues[i];
    }
   let index = posValues.length * 2;
    for (let i = posValues.length; i < negValues.length; i++) {
      result[index] = negValues[i];
      index++;
    }
  } else if (negValues.length < posValues.length) {
    for (let i = 0; i < negValues.length; i++) {
      result[i * 2] = posValues[i];
      result[i * 2 + 1] = negValues[i];
    }
    let index = negValues.length * 2;
    for (let i = negValues.length; i < posValues.length; i++) {
      result[index] = posValues[i];
      index++;
    }
  }
  return result;
}
