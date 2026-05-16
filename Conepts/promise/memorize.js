const add = (a,b) => a+b;



function memorizedOne(fn) {
    const cache = {};
    return (...args) => {
        if(cache[args]) {
            console.log('geting from cache');
            return cache[args];
        } else {
            const res =  fn.apply(this,args);
            cache[args] =  res;
            return res;
        }
    }
}

const memorizedAdd =  memorizedOne(add);

console.log(memorizedAdd(5, 2));
console.log(memorizedAdd(5, 2));
console.log(memorizedAdd(5, 3));
console.log(memorizedAdd(5, 2));


function employee(country) {
    console.log(`${this.firstname} ${this.lastname} ${country}`);
}

const empDetails  = {
    firstname : 'vairam',
    lastname : 'muthu'
}
function employeeDetais() {
    employee.call(empDetails, 'india');
}

employeeDetais();

function sample(greet) {
	console.log(`${greet} ${this.firstName} ${this.lastName}`);
}

const Person = {
firstName : 'Vaira',
lastName : 'Muthu'
}

sample.call(Person, 'Hi');

sample.apply(Person, ['Hi']);

const sample1 =  sample.bind(Person);

sample1();

