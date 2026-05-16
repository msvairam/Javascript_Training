const a = [1, 2, 3, [4, [5, 6]], 7, 8];
function flattenArray(a, result = []) {
    for(let item of a) {
        if(!Array.isArray(item) &&  typeof(item) != 'object') {
            result.push(item);
        } else {
            flattenArray(item, result);
        }
    }
    return result;
}

console.log(flattenArray(a));