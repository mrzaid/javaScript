// var sum = function(a,b){
//     return a+b;
// };
// var b=sum(5,5);
// console.log(b);

// var sqr = function(num){
//     return num*num;
// };
// var b = sqr(9,9);
// console.log(b);








        // function 
        //example1
// var total= sum(99,1);
// console.log(total);

//         function sum (a,b){
//     return a+b;
// }        



// console.log("before initialization",a);//undefine
// var a= 99;
// console.log("after initialization",a);

// var mul=multiply(3,5);
// console.log(mul);
// var add=sum(9,5) // yeh func nahi hai app call nae  karsaktay
// console.log(add);
// var sum = function(a,b){  // sum, is not a funtion
//     return a+b;
// };
// function multiply (num1,num2){
//     return num1*num2;
// }
// console.log();



// arguments pass by value and pass by reference
//Arguments Passed by Value because they are primitive data types
// var num = 5;
// function changeValue(a){
//         console.log("a before ",a);
// a = 7; // change to a will not affect num
// console.log("a after ",a);
// }
// changeValue(num);
// console.log(" Num after function",num);//5, num will not be be updated

//Arguments Passed by Reference
// var arr=[4,45,65,78,90,34];
// function changeValue(num){
//         console.log("NUM BEFORE",num)
//         num[1]=25  //variable ka andar obj ko manipulate
//          //kiya if you try to manipulate the 
//          //whole variable the connection will break
//         console.log("NUM after",num)
// }
// changeValue(arr);
// console.log(arr)



// var arr=[4,45,65,78,90,34];
// function changeValue(num){
//         console.log("NUM BEFORE",num)
//         num=[34,9,54,2,5,7,9]
//         num[2]=9  //variable ka andar obj ko manipulate
//          //kiya if you try to manipulate the 
//          //whole variable the connection will break
//         console.log("NUM after",num)
// //now num is pointing a new array connection braks
// }
// changeValue(arr);
// console.log("after completion of function",arr)

                        //recursive function
                        // function factorial(n) {
                        //         if (n <= 1) {
                        //         // Recursion will stop when this condition match
                        //         return 1;
                        //         } else {
                        //         return n * factorial(n - 1); // calling itself
                        //         }
                        //         }
                        //  console.log(factorial(3));



  //switch case equality chech
  var day = 3;
  switch (day) {
  case 6:
  console.log("Today is Saturday");
  break;
  case 0:
  console.log("Today is Sunday");
  break;
  default:
  console.log("Looking forward to the Weekend");
  }
  
  //grouping of cases
  var day = 3;
switch (day) {
case 6:
case 0:
console.log("Yaaaa! It’s Weekend");
break;
default:
console.log("Looking forward to the Weekend");
}
//Switch - Strict Comparison
var x = "0";
switch (x) {
case 0: //string hona tha strict comparision
console.log("Off");
break;
case 1:
console.log("On");
break;
default: // this will execute as value did not match
console.log("No value found");
}