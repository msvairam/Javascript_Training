"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperEmployee = void 0;
var DeveloperEmployee = /** @class */ (function () {
    function DeveloperEmployee() {
    }
    DeveloperEmployee.prototype.role = function () {
        return 'Developer';
    };
    return DeveloperEmployee;
}());
exports.DeveloperEmployee = DeveloperEmployee;
var dev = new DeveloperEmployee();
console.log(dev.role());
