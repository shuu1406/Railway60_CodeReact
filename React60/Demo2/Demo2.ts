import {Person} from "./Person"
import {Student, printStudent, printStudent_New,sum} from "./Student"
var person1 = new Person(1,"Nghia","TB");


 
 console.log("person1 ", person1);
 console.log("---------------------------------");
 var student1 = new Student(1,"Nghia1","TB","Railway60",9);
 var student2 = new Student(2,"Nghia2","TB","Railway60",9);
 var student3 = new Student(3,"Nghia3","TB","Railway60",9);
 var student4 = new Student(4,"Nghia4","TB","Railway60",10);
 var students: Student[];
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

var numberArray = [1,2,3];
let numberArray_new: number[];

// numberArray.forEach(num => {
//     numberArray_new.push( num + 5);
// });

var numberArray_new_1 = numberArray.map((num) =>{
    return num + 5;
})
console.log(numberArray_new_1);





 
 
 