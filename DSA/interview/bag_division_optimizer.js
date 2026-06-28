function minimumMaximumBags(bags, ops) {

  function checkOperation(mid) {
      midOps = 0;
      for(let bag of bags) {
        midOps += Math.ceil(bag/mid)-1;
      }
      console.log(`midops ${midOps}`);
      return (midOps <= ops)
  }

  let left = 1;
  let right = Math.max(...bags);
  let result = right;

  while (left <= right) {
    console.log(`left: ${left} right: ${right}`);
    let mid = Math.floor((left + right) / 2);
    console.log(`${mid} mid`);
    console.log('checkoper',checkOperation(mid));
    if(checkOperation(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left++;
    }
  }
  return result;
} 

//console.log(minimumMaximumBags([2,8,4, 2], 4));

console.log(`Result ${minimumMaximumBags([9], 2)}`);