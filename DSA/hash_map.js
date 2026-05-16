/*const map = new Map();

map.set('apple', 3);
map.set('banana', 5);
map.set('cherry', 1);

console.log(map.get('apple'));

console.log(map.get('banana'));

console.log(map.size);

map.delete('cherry');

console.log(map.size);

map.forEach((val, key) => {
    console.log(key, val);
});

//  Using Plain Object as Hash Map
console.log('----Using Plain Object as Hash Map');

const hashMap = {};

hashMap['name'] = 'Alice';
hashMap['age'] = 23;

console.log(Object.entries(hashMap).length);
console.log('name' in hashMap);
console.log(hashMap['name']);
delete hashMap['name'];
console.log(hashMap);
*/

class HashMap {
    constructor(size = 10) {
        this.bucket =  new Array(size).fill(null).map(() => []);
        this.size = 10;
    }

    hash(key) {
        let hash = 0;
        for(let char in key) {
            hash = (hash + char.charCodeAt(0)) % this.size;
        }
        return hash;
    }

    set(key, value) {
        let index = this.hash(key);
        const bucket = this.bucket[index];
        const existing = bucket.find(([k]) => k === key)
        if(existing) {
            existing[1] = value;
        } else {
            bucket.push([key, value]);
        }
    }

    get(key) {
         let index = this.hash(key);
        const bucket = this.bucket[index];
        const existing = bucket.find(([k]) => k === key);
        return existing?.[1] ?? null;
    }

    delete(key) {
        let index = this.hash(key);
        this.bucket[index] = this.bucket[index].filter(([k]) => k !== key );
    }
}

// Usage
const map = new HashMap();
map.set("name", "Alice");
map.set("age", "25");
console.log(map.get("name")); // Alice
map.delete("age");
console.log(map.get("age"));  // null*/
console.log(map.bucket);


function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        const balance = target - num;

        if (map.has(balance)) {
            return [map.get(balance), i];
        }

        map.set(num, i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6));      // [1, 2]