function test(nameinput: String = "Someone") {
    console.log(`Hello: ${nameinput}`);
    
};
test("Nghia");
test();
// function test2(nameinput: String, nameinput2: String) {
//     console.log(`Hello: ${nameinput}, ${nameinput2}`);
    
// };

 function test2(...names){
    names.forEach(element => {
        console.log(`Hello : ${element}`);
    });
    
    
 }
 test2("a","b","c","d","e","f");

 function test3(id: number, name: String, gender?: String){
    console.log("Id:", id);
    console.log("Name:", name);
    console.log("Gender:", gender);
    
    
    
 }

