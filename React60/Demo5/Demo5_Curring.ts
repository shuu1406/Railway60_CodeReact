// function multiply(a,b,c) {
//     return a * b * c;
// }

// let result = multiply(1,2,3);


// Curring Function
// function multiply(a) {
//     return function(b){
//         return function(c){
//             return a * b * c;
//         }
//     }
// }

let multiply = (a) => (b) => (c) => a*b*c;

let multiply_1 = multiply(1);
let multiply_2 = multiply_1(2);
let multiply_3 = multiply_2(3);

console.log(multiply_3);

