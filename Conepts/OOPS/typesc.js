var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getUser = function () {
        return 'vairam';
    };
    return Person;
}());
var p = new Person();
console.log(p.getUser());
