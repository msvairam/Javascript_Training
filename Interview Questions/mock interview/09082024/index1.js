function output1(x) {
    x = 20;
    console.log(x);
}

let a = 10;
output1(a);
console.log(a);

function output2(obj) {
    obj.name = 'React';
}

let input = {
    name: 'Angular',
}
output2(input);
console.log(input);

function output3(obj) {
    obj = {
        name:  'React',
    }
    return obj;
}

let input1 = {
    name: 'Angular',
}
console.log(output3(input1));
console.log(input1);
