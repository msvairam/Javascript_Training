function reverseString(str) {
    // Base Case
    if (str.length == 0) return str;

    // Recursion Case
    return str[str.length - 1] + reverseString(str.slice(0, -1)); 
}

console.log(reverseString("hello")); // "olleh"