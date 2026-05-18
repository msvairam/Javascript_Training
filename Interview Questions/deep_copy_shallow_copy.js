/*
Deep copy and Shallow copy in JavaScript:

deep copy and shallow copy becomes useful when dealing with nested structures, 
such as arrays of objects, objects containing other objects, or arrays with nested arrays. 

Shallow copy: 
A shallow copy creates a new object and copy references to the nested structures. 
Changes to the nested structures are reflected in both the original and the copy.

Deep copy: 
A deep copy creates a new object that has its own values, independent of the original object, including nested structures. 
Changes in the copy do not affect the original and vice versa. 

*/

let arr1 = [12, 10, { nestedKey : 30}, 40];

const arr2 = Object.assign([], arr1);

arr2[2].nestedKey = 50;

console.log(arr2[2].nestedKey); // 50
console.log(arr1[2].nestedKey); //50 

let obj1 = { name: "bittu", details: { city: "blr" } };

const obj2 = Object.assign({}, obj1);

obj1.details.city = 'chennai';

console.log(obj2.details.city); // chennai
console.log(obj1.details.city); //  chennai

// Original array of objects with nested values
let students = [
  { id: 1, name: 'abc', details: { age: 23 } },
  { id: 2, name: 'def', details: { age: 24 } },
  { id: 3, name: 'ghi', details: { age: 25 } }
];

const copyStudents = JSON.parse(JSON.stringify(students));

copyStudents[1].details.age = 50;

console.log(students[1].details.age); // 24
console.log(copyStudents[1].details.age); //50