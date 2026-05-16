function occuranceOfChar(str, char) {
    return str.match(char).length;
}

//console.log(occuranceOfChar('malayalam', /a/gi));

function nonRepeactedChar(str) {
    for(let char of str) {
        const reg = new RegExp(char, 'gi');
        console.log(reg);
        if(str.match(reg).length === 1) {
            return char;
        }
    }
}

//console.log(nonRepeactedChar('malayalam'));

function findMissingNumber(arr) {
    const n = Math.max(...arr);
    const arrSet = new Set(arr);
    const missing = [];
    for(let i =1; i <= n; i++) {
        if(!arrSet.has(i)) {
            missing.push(i);
        }
    }
    return missing;
}

function secondLargetNumber(arr) {
    const removeDuplicate = [...new Set(arr)];
    const result =  removeDuplicate.sort((a,b) => b-a);
    return result[1];
}

// console.log(secondLargetNumber([1,2,3,4,5,6,7,8,9]));

function anagram(str1, str2) {
    const word = str1.replace(/\s/gi, '').toLowerCase().split('').sort().join('');
    const word1 = str2.replace(/\s/gi,'').toLowerCase().split('').sort().join('');
    console.log(word); console.log(word1);
    return word === word1 ? 'Yes it is': 'not it is not';
}

 //console.log(anagram('ne l s i t','listen'));



function reverseNumber(num) {
    return Number(Math.sign(num) *  Math.abs(num).toString().split('').reverse().join(''));
}

//console.log(reverseNumber(-913))

function remove(arr) {
   return  arr.filter((value, index) => arr.indexOf(value) === index);
}

//console.log(remove([1, 2, 2, 3, 4, 4, 5]));

function larget(arr) {
    return Math.max(...arr);
}

//console.log(larget([8,5,2,10,6]));

function concat(array1, array2) {
    return array1.concat(array2);
}

function sort(array) {
   return array.sort((a,b) => a-b);
}

// console.log(sort([10, 1, 4, 2, 3]));

function VowelCount(string) {
    const consonants = string.match(/[bcdfghjklmnpqrstvwxyz]/ig); 
    const vowel = string.match(/[aeiou]/ig);

    console.log(vowel.length, consonants.length);
}

//console.log(VowelCount('Genesh205'));

function factorial(n) {
    let fact = 1;
    for(let i = 1; i <=n; i++) {
        fact =  fact * i;
    }
    return fact;
}

//console.log(factorial(10));


function fibonacciSeries(n) {
    let series = [0,1];

    for(let i =2; i < n; i++) {
        series.push(series[i-1] + series[i-2]);
    }
    //return series;
   return series.slice(0, n);
}

//console.log(fibonacciSeries(10));


function isPalindrome(str) {
    const str1 =  str.split('').reverse().join('');
    if(str === str1) {
        return true;
    }
    return false;
}

//console.log(isPalindrome('mlam'));

function reverseString(str) {
    return str.split('').reverse().join('');
}

// console.log(reverseString('vairamuthu'));

//

"vairamuthu".replace(/\b\w/g, (l) => l.toUpperCase());

//  Find maximum value in array

Math.max(...[1, 2, 3, 4, 5]);

// check if variable is an array

Array.isArray([1, 2, 3, 4]);

// Sort array in ascending order

[5, 3, 1, 4, 2].sort((a,b) => b - a);

//  Generate array of numbers

Array((5 - 3) + 1).fill().map((_, idx) => 3 + idx);

// Remove Duplicate from Array

[...new Set([1, 2, 2, 2, 3, 4, 5, 3])]

[0, 1, false, 2, '', 3].filter(Boolean);