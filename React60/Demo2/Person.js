"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Person.prototype.setId = function (id) {
        this.id = id;
    };
    Person.prototype.getId = function () {
        return this.id;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.showInformation = function () {
        console.log("ID:" + this.id);
        console.log("Name:" + this.name);
    };
    return Person;
}());
exports.Person = Person;
// var person1 = new Person;
