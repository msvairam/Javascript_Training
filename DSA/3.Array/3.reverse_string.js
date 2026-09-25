const s = ["h", "e", "l", "l", "0"];

function reverseString(s) {
    let n = s.length;
    for(let i = 0; i < n/2; i++) {
        [s[i], s[n-1-i]] = [s[n-1-i], s[i]];
    }
}

function reverseString1(s) { // my apprach
    let left = 0;
    let right = s.length -1;

    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
}

reverseString(s);
console.log(s);