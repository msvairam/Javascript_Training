
// Both

// ✅ Weak references to objects
// ✅ Automatic garbage collection
// ✅ Prevent memory leaks

// WeakMap - Key as Object. 

let user = { name: 'vairam' };

const weakMap = new WeakMap();
// weakMap.set('test', 'test1'); Invalid value used as weak map key
weakMap.set(user, 'active');

console.log(weakMap.get(user));

console.log(weakMap.has(user)); // true;

console.log(weakMap);

user = null // Object can be garbage collected automatically

console.log(weakMap.has(user)); // false

// WeakSet - Value as object 

//Track visited objects 
//Prevent duplicate object processing
//DOM node tracking

const weakset = new WeakSet();

let obj = { clicked: true };

weakset.add(obj);

console.log(weakset.has(obj));

console.log(weakset);

obj = null;

console.log(weakset.has(obj));

 // No (.size)
 // No (.clear)

 // Prevents Garbage Collection?  No (Weak reference)
 //No size property or iteration (e.g no foreach)

const sets = [...new Set([3,4,5,2,3])];

console.log(sets);