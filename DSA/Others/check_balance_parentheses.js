function checkBalancedParentheses(str) {
    const map = {
        ']': '[',
        '}': '{',
        ')': '(',
    };
    
    const stack = [];
    for(let i = 0; i < str.length; i++) {
        const ch = str[i];

        if(ch === '{' || ch === '[' || ch === '(') {
            stack.push(ch);
        } else if(stack.length > 0 && stack.pop() !== map[ch]){
            return false;
        }
    }
     return true;
}

//console.log(checkBalancedParentheses('[{}]'));
//console.log(checkBalancedParentheses('[{()}{}{}{]'));
//console.log(checkBalancedParentheses('({[]}){}[][({})]'));
console.log(checkBalancedParentheses('[{}{}{}}]'));
console.log(checkBalancedParentheses('{{{{{}}}}}'));