function longConsequtiveSeqUsingSet(arr) {
    let longest = 0;
    const arrSet = new Set(arr);
    console.log(arrSet);
    for(let item of arr) {
        if(!arrSet.has(item - 1)) { // Check Previous Element is Exist or not. 
            let count = 0;
            while(arrSet.has(count + item)) { // Check Next Element and count it.
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
}
const arr = [102, 4, 100, 1, 101, 3, 2, 1, 1];
console.log(longConsequtiveSeqUsingSet(arr));