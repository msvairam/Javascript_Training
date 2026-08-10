function sumOf3Zero1(arr) { // Brute
    const n = arr.length;
    let resultSet = new WeakSet();
    for (let i = 0; i < n;i++) {
        for(let j = i +1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                if((arr[i] + arr[j] + arr[k]) === 0) {
                    let temp  = [arr[i], arr[j], arr[k]];
                    let sort = temp.sort();
                    if(!resultSet.has(sort)) {
                        resultSet.add(temp.sort());
                    }
                }
            }
        }
    }
    return resultSet;
}
// Formula  arr[k] = -(arr[i] + arr[j]);
function sumOf3Zero2(arr) { // Better
    const n = arr.length;
    const resultSet = new Set();

    for(let i = 0; i < n; i++) {
        const hashSet = [];
        for(let j = i +1; j < n; j++) {
            let third = -(arr[i] + arr[j]);

            if(hashSet.find((val) => val === third) !== hashSet.length -1) {
                let temp = [arr[i], arr[j], third];
                resultSet.add(temp.sort());
            }
            hashSet.push(arr[j]);
        }
    }
    return resultSet;
}

function sumOf3Zero3(arr) { // Optimal
    arr.sort();
    const n = arr.length;
    const result = [];

    for(let i = 0; i < n; i++) {
        if(i > 0 && arr[i] === arr[i - 1]) continue;
        let j = i +1;
        let k = n - 1;
        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if (sum < 0) {
                j++;
            } else if(sum > 0) {
                k--;
            } else {
                result.push([arr[i], arr[j] , arr[k]]);
                j++;
                k--;

                while(j < k && arr[j] === arr[j-1]) j++;
                while(j < k && arr[k] === arr[k+1]) k--;
            }
        }
    }
    return result;
}


const arr = [-1, 0, 1, 2, -1, -4];
//console.log(sumOf3Zero1(arr));
//console.log(sumOf3Zero2(arr));
//const arr1 = [-2. -2, -2, -1, -1, -1, 0, 0, 0, 2, 2, 2, 2];
console.log(sumOf3Zero3(arr));


