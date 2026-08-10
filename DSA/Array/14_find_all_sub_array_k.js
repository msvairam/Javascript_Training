function findAllSubarraysWithGivenSum(arr, k) { // 0(n2) // Better
    let n = arr.length;
    let count = 0;
    for(let i =0; i < n; i++) {
        let sum = 0;
        for(let j = i; j <n; j++) {
            sum += arr[j];
            if(sum === k) {
                count++;
                console.log(arr.slice(i, j+1));
            }
        }
    }
    return count;

}

function findAllSubarraysWithGivenSumOptimal(arr, k) {
    const mapStore = new Map();
    mapStore.set(0,1); // Initital set(0,1) important
    let prefixSum = 0;
    let count = 0;

    for(item of arr) {
        prefixSum += item;

        mapStore.set(
            prefixSum,
            (mapStore.get(prefixSum) ? mapStore.get(prefixSum)+1: 1)
        )
        count += mapStore.get(prefixSum - k) ?? 0;
    }
    return count;
}

const arr  = [1, 2,3, -3, 1,1, 1,4,2,-3];
console.log(findAllSubarraysWithGivenSumOptimal(arr, 3));