function validate(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}':'{',
        ']':'[',
    };

    for(let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else if (stack.length === 0 || stack.pop() !== map[ch]) {
            return false;
        }
    }
    return stack.length === 0;
}

function validate2(originalInput ,input = '', i = 0, j = 0) {
    let index = -1;
    if(input == '' && j == 0) {
        input=  originalInput;
    }
    if(input[i] == '{') {
        index = input.indexOf('}');
    } else if(input[i] == '[') {
        index = input.indexOf(']');
    } else if(input[i] == '(') {
        index = input.indexOf(')');
    }
    if(input[i] == '{' || input[i] == '[' || input[i] == '(') {
        if(index  < 0 ) {
            return false;
        } else {
            j =  j + index;
            return validate(originalInput, input.slice(i+1,index), 0, j);
        }
    } else if(input != '' && index < 0) {
        return false; 
    } else if(originalInput > j) {
        return validate(originalInput.slice(j,1), 0, j+1);
    }
    console.log('fd');
}

function validate1(input) {
    const arrInput =  input.split('');
    var checkArr = [];
    for(let val of arrInput) {
        let index = -1;
        if(val == '}') {
            index =  checkArr.indexOf('{');
        } else if(val  == ']') {
            index =  checkArr.indexOf('[');
        } else if(val  == ')') {
            index =  checkArr.indexOf('(');
        } else {
            checkArr.push(val);
        }
        if(val == '}' || val  == ')' || val  == ']') {
            if(index < 0) {
                checkArr.push(val);
            } else {
                checkArr.splice(index,  1);
            }
        }
        console.log(checkArr);
    }
    if(checkArr.length > 0) {
        console.log('Failed');
    } else {
        console.log('Success');
    }
}

console.log(validate('([{()}])'));
//console.log(validate('{[}]'));

