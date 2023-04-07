// Calculator
function sum(aInput: number, bInput: number) {
    return aInput + bInput;
    
}
function minus(aInput: number, bInput: number) {
    return aInput - bInput;
    
}
function mult(aInput: number, bInput: number) {
    return aInput * bInput;
    
}

console.log("-------------------------------------------------");
let sumab = sum(10,20);
console.log("sumab:", sumab);

let minusab = minus(30,20);
console.log("minusab:", minusab);

let multab = mult(30,20);
console.log("multab:", multab);

function calculate(a: number, b: number, operation) {
    // operation: nhận các tham số tùy ý, có thể nhận 1 function
    let result = operation(a,b);
    return result;
}
