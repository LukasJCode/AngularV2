"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTitlePipe = void 0;
var EmployeeTitlePipe = /** @class */ (function () {
    function EmployeeTitlePipe() {
    }
    EmployeeTitlePipe.prototype.transform = function (value, gender) {
        if (gender.toLowerCase() == 'male') {
            return "Mr." + value;
        }
        else {
            return "Miss." + value;
        }
    };
    return EmployeeTitlePipe;
}());
exports.EmployeeTitlePipe = EmployeeTitlePipe;
//# sourceMappingURL=employeeTitle.pipe.js.map