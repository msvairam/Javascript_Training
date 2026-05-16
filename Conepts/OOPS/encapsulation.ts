export class Employee<T> {
    private _empId!: T;

    public getEmpId(): T {
        return this._empId;
    }

    public setEmpId(id: T): void {
        if (typeof id === 'number' && id < 1) {
            console.log('Is it less then 0');
        } else {    
            this._empId = id;
        }
    }
}

const emp =  new Employee<number>();

emp.setEmpId(5);

console.log(emp.getEmpId());