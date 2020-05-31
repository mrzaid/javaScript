// var user = {
//     name:"daniyal",
//     age:"20",
//     country:"pakistan",
//     city:"karachi"
// }
// console.log(user);
// console.log(`my name is : ${user.name}`);
// console.log(`my age is : ${user.age}`);










//object is a refference data type
var name1 = "zaid";
var name2 = "ahmed";
console.log(name1);
console.log(name2);
name2= name1;
console.log("name2 after passing name1",name2)
name2 = "john";
console.log("name2 after changing its value",name2);


var obj1 = {
    age : 18,
}

var obj2 = {
    age : 20,
}
console.log(obj1.age);
console.log(obj2.age);
obj2 = obj1   //passed by reference
console.log("obj2 value after passing the reference",obj2.age);
obj2.age = 30;
console.log("obj2 value after changing",obj2.age);

console.log("obj1 value after changing obj2 value",obj1.age);
//its value also changes because it was passed by reference












