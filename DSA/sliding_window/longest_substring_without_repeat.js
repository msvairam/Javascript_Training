// 6️⃣ Sliding Window — Longest Substring Without Repeating
function longestUniqueSubstring(str) {
    let maxLen = 0;
    let left = 0;
    let seen = new Map();

    for(let right = 0; right < str.length; right++ ) {
        const char = str[right];

        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    

    return maxLen;
}


console.log(longestUniqueSubstring("abcabcbb")); // 3 (abc)
console.log(longestUniqueSubstring("pwwkew"));   // 3 (wke)
console.log(longestUniqueSubstring("bbbbb"));    // 1 (b)