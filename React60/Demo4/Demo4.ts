let account = {
    id: 1,
    name: "Nghia",
    class: "Railway60",
};
let {id: myId, name: myName, class: myClass} = account;
console.log("myId", myId);
console.log("myName", myName);
console.log("myClass", myClass);

// Mang?
let nameRailway60_ = ["Doan", "Tuan", "Nghia"];
//  let element0 = nameRailway60_[0];
//  let element1 = nameRailway60_[1];
//  let element2 = nameRailway60_[2];

let [element0,element1,element2] = nameRailway60_;


