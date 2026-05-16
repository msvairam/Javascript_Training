export class Person {
    public name!: string;
    age!: number;

    familyCount() {
        return 6;
    }
}

var objPerson = new Person();

objPerson.name = 'vairamuthu';
objPerson.age = 10;

console.log(objPerson.familyCount());
