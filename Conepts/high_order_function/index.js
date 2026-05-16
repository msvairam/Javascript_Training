const arr = [5,1,3,2,6,4];


const double = (val) => val * 2;

const triple = (val) => val * 3;

console.log(arr.map(double));

console.log(arr.map(triple));

// Filter

const isOdd = (val) => val % 2;
const isEvent = (val) => val % 2 === 0;

console.log(arr.filter(isOdd));
console.log(arr.filter(isEvent));

// Reduces

console.log(arr.reduce((acc, curr) => acc = acc + curr, 0));
console.log(arr.reduce((acc, curr) => acc = acc < curr ? curr : acc, 0));

  const user = [
        { firstname: "Mohammad", lastname: "Noushad", age: 22 },
        { firstname: "Aniket", lastname: "Bhalla", age: 45 },
        { firstname: "Bidhi", lastname: "Chand", age: 22 },
        { firstname: "Saif", lastname: "Siddiqi", age: 67 },
      ];

console.log(user.map(details => details.firstname.concat(' ',details.lastname)));

console.log(user.reduce((acc, curr) => {
    acc[curr.age] = acc[curr.age] ? acc[curr.age] + 1: 1;
    return acc;
},{}));

console.log(user.reduce((acc, curr) => {
    if(curr.age > 30) {
        acc.push(curr.firstname);
    }
    return acc;
},[]));



/*const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumance = function(radius) {
    return 2 * Math.PI * radius;
}
Array.prototype.calculate = function(logic) {
    const output = [];
    for (const val of this) {
        output.push(logic(val));
    }
    return output;
}

console.log(radius.map(area));
console.log(radius.calculate(area)); */
