var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.familyCount = function () {
        return 6;
    };
    return Person;
}());
var objPerson = new Person();
objPerson.name = 'vairamuthu';
objPerson.age = 10;
console.log(objPerson.familyCount());
