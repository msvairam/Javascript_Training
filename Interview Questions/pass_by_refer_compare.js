
// [2] == [2] -> false
console.log([2] == [2]); // false
console.log([2] === [2]); // false

const arr1 = [2]; // Memory: 0x1a2b
const arr2 = [2]; // Memory: 0xf3c

console.log(arr1 == arr2) // false
console.log(arr1 === arr2) // false

// 1. Referential Equality (Checking if they are the same instance)

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Alice' };
const obj3 = obj1;

console.log(obj1 === obj2); // false
console.log(obj1 == obj2); // false (different locations in memory)
console.log(obj1 === obj3); // true (pointing to the same instance)

// 2. Manual/Shallow Comparison (Checking top-level values) No nested object.

function isEqualComparsion(obj1, obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if(key1.length != key2.length) return false;

    return key1.every((key) => obj1[key] === obj2[key]);
}

console.log(isEqualComparsion(obj1, obj2));

// 3. Quick Trick JSON.stringify();

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

// 4. Lodash _.isEqual(obj1, obj2);

