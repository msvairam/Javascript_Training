const obj = {
    a: {
        b: {
            c : [[1],2,3]
        }
    }
};

function getKey(obj, path, present) {
    let arrayObj = path;
    if (!Array.isArray(path)) {
        arrayObj = path.replaceAll(/\[(\w+)\]/g, '.$1').split('.');
    }
    console.log(arrayObj);
    let result = obj;
    for(let p of arrayObj) {
        result = result ? result[p]: result;
    }

    console.log(result);
}


console.log(getKey(obj, 'a.d.c'));
console.log(getKey(obj, 'a.b.c.0'));
console.log(getKey(obj, 'a.b.c[1]'));
console.log(getKey(obj, 'a.b.c[0][0]'));
console.log(getKey(obj, ['a', 'b', 'c', '2']));
console.log(getKey(obj, 'a.b.c[3]'));
console.log(getKey(obj, 'a.c', 'Learning'));
