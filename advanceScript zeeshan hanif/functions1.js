
//     //default functions
// function add(a, b = 1) { 
//     return a+b; 
//  } 
//  console.log(add(4))
// //Rest Parameters
//  function fun1(...params) { 
//     console.log(params.length); 
//  }  
//  fun1();  
//  fun1(5); 
//  fun1(5, 6, 7);

//  //Example − Anonymous Recursive Function

// (function() { 
//    var msg = "Hello World" 
//    console.log(msg)
// })()

//lambda functions
console.log("HELLO WORLD");
var c = a => a+2;
var d = c(98);
console.log(d);

function hello( a){
    return a+2;
}
var b = hello(4);
console.log(b);

var e = x =>{
    console.log(x);
    return x; // you have to put return still you have arrow but in {} you have to return
}
console.log(e(9));






