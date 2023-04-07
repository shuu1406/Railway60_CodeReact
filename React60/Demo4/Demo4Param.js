function test(nameinput) {
    if (nameinput === void 0) { nameinput = "Someone"; }
    console.log("Hello: ".concat(nameinput));
}
;
test("Nghia");
test();
// function test2(nameinput: String, nameinput2: String) {
//     console.log(`Hello: ${nameinput}, ${nameinput2}`);
// };
function test2() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log("Hello : ".concat(names));
}
test2("a", "b", "c", "d", "e", "f");
