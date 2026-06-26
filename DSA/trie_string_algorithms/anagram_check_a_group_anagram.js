function isAnagram(f, s) {
    if(f.length !== s.length) return false;

    const freq = {};
    for(let char of f) freq[char] = (freq[char] || 0) + 1;
    for(let char of s) {
        if(!freq[char]) return false;
        freq[char]--;
    }
    return true;
}


console.log(isAnagram("anagram", "nagaram")); // true  ✅
console.log(isAnagram("rat", "car"));         // false ❌

function groupAnagrams(words) {
    if(!words.length) return false;

     const map = new Map();

    for(let word of words) {
        let key = word.split('').sort().join('');

        if(!map.has(key))  map.set(key, []);

        map.get(key).push(word);
    }
    return [...map.values()];
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));