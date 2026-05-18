// Enum - set of named constants
// Enum define a collection of related values (numbers or strings)

    /*
        Key traits:

        Compiles to real JavaScript (it's a runtime object)
        Holds values, not structure
        Two flavors: numeric (default) and string enums
    */

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);
console.log(Direction.Down);

enum Status {
    Active = 'ACTIVE',
    InActive = 'INACTIVE',
}

console.log(Status.Active);

enum Role {
    Admin = 'ADMIN',
}

// Interface - A shape/contract for objects.
// Interface defines a structure of object. that must follow.

/*
    Key traits:

    Erased at compile time — zero JavaScript output
    Defines object shape, function signatures, class contracts
    Supports declaration merging and extending
*/

interface User {
    name: string,
    age: number,
    email?: string // optional
}

interface Admin extends User {
    role: string
}

const admin: Admin = {
    name: 'vairamuthu',
    age: 30,
    role: Role.Admin,
}

console.log(admin);

//People sometimes use enums when a union type is cleaner:
// ❌ Overkill with enum
/*enum Direction1 {
    Up = 'UP',
    Down = 'DOWN',
} */

// ✅ Simpler with union
type Direction1 = 'UP' | 'DOWN';