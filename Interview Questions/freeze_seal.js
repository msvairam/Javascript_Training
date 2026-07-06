const Obj = {
    prop : 42
};

Object.seal(Obj);

Obj.prop  = 45;

Obj.value = 'Vairam';

delete Obj.prop;

console.log(Obj);

// Nest Object

const nestedObj = {
    prop: 42,
    nested: {
        a: 1,
        b: 2,
    }
};

Object.seal(nestedObj);

nestedObj.prop = 45;
delete nestedObj.nested;

nestedObj['value'] = 'vairamuthu';

nestedObj.nested['c'] = 3;
delete nestedObj.nested.a;
console.log(nestedObj); // { prop: 45, nested: { b: 2, c: 3 } }

deepSeal(nestedObj);
delete nestedObj.nested.b;
console.log(nestedObj); // { prop: 45, nested: { b: 2, c: 3 } }

function deepSeal(object) {
    const propNames = Object.getOwnPropertyNames(object); 

    for(let name of propNames) {
        const value = object[name];

        object[name] = value && typeof value === 'object'?
            deepSeal(value) : value;
    }
     return Object.seal(object);
}


const newObj = {
    prop: 45
};

Object.freeze(newObj);

newObj.prop = 54;
delete newObj.prop;
newObj.value = 'Hi';

console.log(newObj);

const newNestedObj = {
    prop: 45,
    nested: {
        a: 1,
        b: 2,
    }
}

Object.freeze(newNestedObj);

newNestedObj.nested.a = 78;
delete newNestedObj.nested.b;

console.log(newNestedObj);
deepFreeze(newNestedObj);
newNestedObj.nested.c = 78;
console.log(newNestedObj);


function deepFreeze(object) {
    const propNames = Object.getOwnPropertyNames(object);

    for(let name of propNames) {
        const val = object[name];

        object[name] = typeof val === 'object' ? deepFreeze(val) : val;

    }
     return Object.freeze(object);
}
