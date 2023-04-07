"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Student_1 = require("./Student");
var person1 = new Person_1.Person(1, "Nghia", "TB");
console.log("person1 ", person1);
console.log("---------------------------------");
var student1 = new Student_1.Student(1, "Nghia1", "TB", "Railway60", 9);
var student2 = new Student_1.Student(2, "Nghia2", "TB", "Railway60", 9);
var student3 = new Student_1.Student(3, "Nghia3", "TB", "Railway60", 9);
var student4 = new Student_1.Student(4, "Nghia4", "TB", "Railway60", 10);
var students;
students = [student1, student2, student3, student4];
// student1.showInfoStudent();
// printStudent(student1);
// printStudent(student2);
// printStudent(student3);
//sum(1,2);
// console.log("Su dung For");
// for (let index = 0; index < students.length; index++) {
//     students[index].showInfoStudent();
// }
// console.log("Su dung Foreach");
// students.forEach(st => {
//     st.showInfoStudent();
// });
// for (const key in students) {
//    students[key].showInfoStudent;
// }
// for (const iterator of students) {
//     console.log(iterator);
// }
var numberArray = [1, 2, 3];
var numberArray_new;
// numberArray.forEach(num => {
//     numberArray_new.push( num + 5);
// });
var numberArray_new_1 = numberArray.map(function (num) {
    return num + 5;
});
console.log(numberArray_new_1);
