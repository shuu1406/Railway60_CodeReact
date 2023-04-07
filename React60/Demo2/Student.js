"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.printStudent_New = exports.printStudent = exports.Student = void 0;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, name, address, classVTI, testScore) {
        var _this = _super.call(this, id, name, address) || this;
        _this.classVTI = classVTI;
        _this.testScore = testScore;
        return _this;
    }
    /**
     * Getter classVTI
     * @return {string}
     */
    Student.prototype.getClassVTI = function () {
        return this.classVTI;
    };
    /**
     * Getter testScore
     * @return {number}
     */
    Student.prototype.getTestScore = function () {
        return this.testScore;
    };
    /**
     * Setter classVTI
     * @param {string} value
     */
    Student.prototype.setClassVTI = function (value) {
        this.classVTI = value;
    };
    /**
     * Setter testScore
     * @param {number} value
     */
    Student.prototype.setTestScore = function (value) {
        this.testScore = value;
    };
    Student.prototype.showInfoStudent = function () {
        _super.prototype.showInformation.call(this);
        console.log("Class:" + this.classVTI);
        console.log("Score:" + this.testScore);
        console.log("=====================");
    };
    Student.prototype.toString = function () {
        var result = "ID: ".concat(_super.prototype.getId.call(this), ", Name: ").concat(_super.prototype.getName.call(this), ", Class: ").concat(this.classVTI, ",Score: ").concat(this.getTestScore());
        return result;
    };
    return Student;
}(Person_1.Person));
exports.Student = Student;
function printStudent(student) {
    console.log("ID:" + student.getId());
    console.log("Name:" + student.getName());
    console.log("Class:" + student.getClassVTI());
    console.log("Score:" + student.getTestScore());
}
exports.printStudent = printStudent;
var printStudent_New = function (student) {
    console.log("ID:" + student.getId());
    console.log("Name:" + student.getName());
    console.log("Class:" + student.getClassVTI());
    console.log("Score:" + student.getTestScore());
};
exports.printStudent_New = printStudent_New;
var sum = function (a, b) {
    return console.log("Sum: " + (a + b));
};
exports.sum = sum;
