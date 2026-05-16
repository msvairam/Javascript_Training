"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getEmpId = function () {
        return this._empId;
    };
    Employee.prototype.setEmpId = function (id) {
        if (typeof id === 'number' && id < 1) {
            console.log('Is it less then 0');
        }
        else {
            this._empId = id;
        }
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee();
emp.setEmpId(5);
console.log(emp.getEmpId());
