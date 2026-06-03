function flatternObj(obj, result = {}, str = '') {

    for (let key in obj) {
        const newStr = (str != '') ? str+'.'+key: key;

        if(!Array.isArray(obj) && typeof obj[key] === 'object') {
            result = {
                ...result,
                ...flatternObj(obj[key], result, newStr), // Recursion Case
            }
        } else {
            result = { // Base Case
                [newStr]: obj[key],
                ...result,
            }
        }
    }
    return result;
}

const obj = {
    name: 'vairam',
    age: 30,
    address: {
        street: 'Sengundram Nagar',
        city: 'Madurai',
        country: {
            code: 'IN'
        }
    },
    gender: 'male',
}

console.log(flatternObj(obj));