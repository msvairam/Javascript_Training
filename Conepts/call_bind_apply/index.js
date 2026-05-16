const person = {
    firstName: 'Vairamuthu',
    lastName: 'Masanamuthu',
    print: function (distrct, street) {
        console.log(`Name ${this.firstName} ${this.lastName} From ${street} at ${distrct}`);
    },
}

person.print('Madurai', 'Sengudram Nagar');

const person1 = {
    firstName: 'Miliran',
    lastName: 'Vairamuthu',
}

//CALL: Method Borrowing
person.print.call(person1, 'Thirunelveli', 'Planai Street');

// APPLY:  Same like call. But param should pass like list of array. not individual params

person.print.apply(person1, ['Thirunelveli', 'Planai Street']);

// BIND: It is doesn't invoke immediately. It will return method function. It can use later.
console.log('Bind');
let bindPerson = person.print.bind(person1);
bindPerson('Thirunelveli', 'Planai Street');
bindPerson('Madurai', 'Sengudram Nagar');


console.log(`==Ployfill for bind method==`);

const student = {
    firstName: 'Vairamuthu',
    lastName: 'Masanamuthu',
    printName: function(disctrct, state) {
        console.log(this.firstName, ' ' , this.lastName, ' Disctract :', disctrct,' State : ', state);
    },
}

const student2 = {
    firstName: 'Miliran',
    lastName: 'Vairamuthu',
}

Function.prototype.bindPerson = function(...args) {
    return (...args1) => this.apply(args[0], [...args.slice(1), ...args1]);
};

let ownBind = student.printName.bindPerson(student2, 'Bangalore');
ownBind('Karnataka');


const obj = {
    name: 'miliran',
    print: function() {
       return function () {
            console.log(this.name);
        }
    }
}

obj.print().call(obj);