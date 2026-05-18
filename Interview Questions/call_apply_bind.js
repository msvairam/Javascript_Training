// call() is one of the ways to control the value of `this` within a function at the time of invocation. 
// It's particularly useful when you want to borrow functionality from another object, set the context for a function


/*
In JavaScript, the call, apply, and bind methods are used to call a function and set the "this" value inside that function.   ( argument to be passed in this is optional )
call  (thisValue, arg1, arg2, ... ) : This method calls the function and sets the "this" value for the function.
apply (thisValue, argArray): It is similar to call(), but it accepts arguments as an array. It executes a function, setting the `this` value and accepting arguments as an array.
bind(thisValue, arg1, arg2, ...) It is a method that creates a new function, binding the provided object as the this context. To consume this we need to call it later. 
*/ 


function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype.getFullName = function() {
    console.log(`FirstName: ${this.fname} LastName: ${this.lname}`);
}


const person = new Person('vairam', 'muthu');
person.getFullName();

const person1 = { fname: 'masana', lname: 'muthu'};
person.getFullName.call(person1);

const person2 = person.getFullName.bind(person1);
person2();

// understand with this example

function Car(company, fuelType) {
    this.company = company;
    this.fuelType = fuelType;

    this.carDetails = function(color, price) {
        console.log(`Company: ${this.company} FuelType: ${this.fuelType} color: ${color} price: ${price}`);
    }
}

const car1 = new Car('Tata', 'Petrol');

car1.carDetails('Red', '$300');

const car2 = { company: 'Maruthi', fuelType: 'Diel' };
car1.carDetails.call(car2, 'Green', '$200');

const car3 = car1.carDetails.bind({company: 'Indica', fuelType: 'Petrol'});
car3('Blue', '$100');

car1.carDetails.apply(car2, ['Orange', '$900']);