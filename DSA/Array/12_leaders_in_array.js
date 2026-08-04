function leaderInArray(arr) {
    let maxInArray = -Infinity;
    const leader = [];

    for(let i = arr.length -1; i > 0 ; i--) {
        if(arr[i] > maxInArray) {
            leader.push(arr[i]);
        }
        maxInArray = Math.max(maxInArray, arr[i]);
    }
    return leader.reverse();
}
const arr = [10, 22, 12, 3, 0, 6];
console.log(leaderInArray(arr));