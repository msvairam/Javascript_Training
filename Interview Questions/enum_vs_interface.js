// Enum - set of named constants
// Enum define a collection of related values (numbers or strings)
/*
    Key traits:

    Compiles to real JavaScript (it's a runtime object)
    Holds values, not structure
    Two flavors: numeric (default) and string enums
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["InActive"] = "INACTIVE";
})(Status || (Status = {}));
console.log(Status.Active);
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
})(Role || (Role = {}));
var admin = {
    name: 'vairamuthu',
    age: 30,
    role: Role.Admin,
};
console.log(admin);
