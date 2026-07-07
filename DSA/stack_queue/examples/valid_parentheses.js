function isValidParentheses(s) {
    const map = {
        '}' : '{',
        ')': '(',
        ']': '[',
    };
    const stack = [];

    for(let i =0; i < s.length; i++) {
        const ch = s[i];

        if(ch === '{' || ch === '(' || ch === '[') {
            stack.push(ch);
        } else if(stack.length && stack.pop() !== map[ch]) {
            return false;
        }
    }
    return true;
}

console.log(isValidParentheses("()[]{}"));  // true  ✅
console.log(isValidParentheses("(]"));      // false ❌
console.log(isValidParentheses("{[()]}"));  // true  ✅
console.log(isValidParentheses("([)]"));    // false ❌