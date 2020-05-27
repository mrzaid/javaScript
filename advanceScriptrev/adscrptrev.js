/*
// var a = "zaid 'ahmed'"
// console.log(a)
var firstName = "zaid"
var lastName = "ahmed"

console.log('zaid "ahmed"');
// var stringBackticks = `MY FIRST NAME IS ${firstName}
// AND MY LAST NAME IS ${lastName}`;
// console.log(stringBackticks);
*/
// function scope(){
//     var name = "zaidAhmed";
// }
// console.log(name);
        //let var const all
// function maalik(){
//     const name1 = "zaid";
//     console.log(name1);
//     if(true){
//         console.log(name1);
    
//         if(true){
//             console.log(name1);
        
//     if(true){
//         console.log(name1);
//     }
//         }    
//     }
// }
// maalik();
// var name1 = "zaid";
//console.log(name1);






// if (true) {
//     // userName is in the global scope because of the 'var' keyword
//     var userName = 'John Martin ';
//     console.log(userName); // output 'Ameen Alam'
//     // age is in the local scope because of the 'let' keyword
//     let age = 20;
//     console.log(age); // output 20
//     // skills is in the local scope because of the 'const' keyword
//     const skills = 'JavaScript' ;
//     console .log(skills); // output 'JavaScript'
//     }
//     console.log(userName); // output 'Ameen Alam'
//     console.log(age); // Uncaught ReferenceError : age is not defined
//     console.log(skills); // Uncaught ReferenceError : skills is not defined




//hoisting
// fn kay andar bhi var ki hoisting
// function hoisting(){
    
//     console.log("name",name1)
//     var name1="zaid"
// }
// hoisting();
// //console.log("name")


// sayHi();
// function add (a, b){
//     return a + b;
//     }
    
// function sayHi(){
// console.log('hey');
// console.log(add(1,2));
// }




var add = (a,b) =>{
    a + b;
    }
function sayHi(){
console.log('hey');
console.log(add(1,2));
}
sayHi();