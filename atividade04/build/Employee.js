"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.updateSalary = function (addition) {
        var result = this.salary + addition;
        console.log("Sal\u00E1rio Atual: ".concat(this.salary, "\nSal\u00E1rio Novo: ").concat(result));
    };
    return Employee;
}());
exports.Employee = Employee;
