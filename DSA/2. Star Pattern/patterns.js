

function pattern1(n) {

    for(let i =0; i < n; i++) {
    let row = '';

        for(let j =0 ; j < n; j++) {
        row += ' *';
        }
        console.log(row);
    }
}

pattern1(4);
matrix(3);

function matrix(n) {
        let count = 0;
    for (let i = 0; i < n; i++) {
           let result = '';
        for(let j = 0; j < n; j++) {
            result += ++count;
        }
        console.log(result);
    }
}

// j < i+1
// j <= i

function pattern2(n) {
    for(let i = 0; i < n; i++) {
        let row  = '';
       // for(let j = i + 1; j > 0; j--) { my apprach
       for(let j =0; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

pattern2(4);

function pattern3(n) {
    for(let i =0; i < n; i++) {
        let row = '';
        for(let j = 0; j <= i; j++) { // my approach
            row += (j+1)+' ';
        }
        console.log(row);
    }
}

pattern3(5)

console.log('=======PATTERN 4=========');
function pattern4(n) {
    for(let i = 1; i <= n; i++) {
        let row = '';
        for(let j = 1; j <= i; j++) {
            row += i +' ';
        }
        console.log(row);
    }
}

pattern4(5);

console.log('==========PATTERN 5 =============');

function pattern5(n) { // my approach
    for(let i = n; i > 0; i--) {
        let row = '';
        for(j = 1;  j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

function pattern5_1(n) {
    for(let i =0; i < n; i++) {
        let row = '';
        for(j = 1; j <= n - i; j++){
            row += j + ' ';
        }
        console.log(row);
    }
}

pattern5(5);
pattern5_1(5);

console.log('=======PATTERN 6==========');

function pattern6(n) { // my approach
    for(let i =0; i < n ;i++) {
        let row = '';
        for(let j =0; j < n; j++) {
            if (j >= (n - 1) - i) {
                row +='*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

pattern6(5);
pattern6_1(5);

function pattern6_1(n) { // Teach approach
    for(let i = 0; i < n; i++) {
        let row = '';
        for(let j = 0; j < n - (i + 1); j++) {
           row += '-';
        }

        for(let k =0; k < i +1; k++) {
            row += '*';
        }
        console.log(row);
    }
}

/*
    *
   **
  ***
 ****
***** 
*/
console.log('======PATTERN7=====');
function pattern7(n) { // my approach
    for(let i =0; i < n; i++) {
        let row = '';
        for(let j =0; j < i+1; j++) {
            row += (j%2 === 0) ? '1': '0';
        }
        console.log(row);
    }
}
pattern7(5);

function pattern7_1(n) { // Teaching approach
    for(let i =0; i < n; i++) {
        let row = '';
        let toggle = 1;
        for(let j =0; j < i+1; j++) {
            row += toggle;
            toggle = toggle ? 0: 1;
        }
        console.log(row);
    }
}
/*
1
10
101
1010
10101
*/
pattern7_1(5);

console.log('=========PATTERN8======');

function pattern8(n) { // Teaching approach
        let toggle = 1;
    for(let i =0; i < n; i++) {
        let row = '';
        for(let j =0; j < i+1; j++) {
            row += toggle;
            toggle = toggle ? 0: 1;
        }
        console.log(row);
    }
}

pattern8(5);