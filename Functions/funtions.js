//  console.log("before function");
//  function showMessage(){
//      console.log("HELLO WORLD");
//  }
//  console.log("after funtion");
//  showMessage();
//  console.log("after function calling");

            //passing data to function
// function multiply (num1,num2){
//     var num3= num1 * num2;
//     console.log(num3);
// }
// multiply(5,6);
// multiply(5657,6);
// function showMessage(name){
//     console.log("Hello "+name);

// }
// showMessage("John");
// showMessage("Wick");
// function multiply (num1,num2){
//     var num3= num1 * num2;
//     return num3;
// }
// var num4 = multiply(5,6); //catching return value from function in variable
// var num5 = multiply(5657,6);
// console.log(num4); // by default it returns undefined
// console.log(num5);

// function multiply(num1, num2){
//     return num1 * num2;
//     }
//     var a = multiply(3,6); // returns 18 //pehlay a wala compplete hoga then it will go to b
//     var b = multiply(4,2); // returns 8
//     console.log(a); // 18
//     console.log(b); // 8
//     console.log(multiply(2,5)); // 10

// function multiply (num1,num2){
//     return num2; //function wxecution ends here it will not to go further
//     return num1*num2;
// }
// console.log(multiply(2,5));
// function gradeCheck(score){
//     if (score>80 && score<=100){
//         console.log("GRADE A");
//     }
//     else if (score>70 && score<=80){
//         console.log("GRADE b");
//     }
    
//     else if (score>60 && score<=70){
//         console.log("GRADE c");
//     }
    
//     else if (score>50 && score<=60){
//         console.log("GRADE d");
//     }
//     else{
//         console.log("failed");
//     }
// }
// gradeCheck(75);
// gradeCheck(95);
// gradeCheck(45);




               //returning functionss
//  function calculateScore(sub1,sub2,sub3){
//      return (sub1 + sub2 + sub3)/3;
//  }
//                 function gradeCheck(score){
//                     if (score>80 && score<=100){
//                         console.log("GRADE A");
//                     }
//                     else if (score>70 && score<=80){
//                         console.log("GRADE b");
//                     }
                    
//                     else if (score>60 && score<=70){
//                         console.log("GRADE c");
//                     }
                    
//                     else if (score>50 && score<=60){
//                         console.log("GRADE d");
//                     }
//                     else{
//                         console.log("failed");
//                     }
//                 }
//                 // gradeCheck(75);
//                 // gradeCheck(95);
//                 // gradeCheck(45);
//                var score1= calculateScore(45,67,89);    
//                var score2= calculateScore(65,56,19);
//                console.log("SCORE 1 = "+score1);
//                console.log("SCORE 2 = "+score2);
//                gradeCheck(score1);
//                gradeCheck(score2);



//playing with two functions
// function multiply(num1,num2){
//     return num1* num2;  //20
// }
// function sum (a,b){
//     return multiply(a,b)+6 //26
// }
// var total= sum(4,5) + 6 ; //32
// console.log(total);

// function multiply(num1,num2){
//     return num1* num2;  //15
// }
// function sum (a,b){
//     return a+b; //20
// }
// // call multiply first and result passed to sum
// var total= sum(multiply(3,5),5) +30 ; //50
// console.log(total);

// function multiply(num1,num2){
//     return num1* num2;  //15
// }
// function sum (a,b){
//     return multiply(a,b)+b; //20
// }
// // call multiply first and result passed to sum
// var total= sum(6,5) + 65 ; //50
// console.log("Sum is =",total);





            //local and global variables
            // var a = 7; // Global Variable
            // function sum(){
            // var b = 6; // Local Variable
            // var c = a + b; // 13, Accessing global
            // console.log("C "+c);
            // }
            // sum();
            // console.log("A = "+a); // 7
            // var a = 7; // Global Variable

//variable updated in function            
// function sum(){
// var b = 6; // Local Variable
// a = b + 5;
// console.log("A "+a);// Accessing global variable
// }
// sum();
// console.log("A = "+a); // 11, value of a updated
// var a = 7; // Global Variable //pehlay acces badmein declare bcuz saari dec upper





// var a = 7; // Global Variable
// function sum(){
// var b = 6; // Local Variable
// a = b + 5;
// }
// sum();
// // we cannot print b because its local varible
// //console.log("B = "+b);
// // error, b is not available outside sum function



// var a = 7; // global Variable a same name as local
// function sum(){
// var a = 6; // Local Variable a same name as global
// a = 3 + 2; // Local a variable will be affected
// console.log("A "+a);//5, access local variable
// }
// sum();
// console.log("A "+a);//7, access global variable


//Global Variables without var keyword

 // Without var still Global Variable
 a = 7; //bagair var kay nae baba NECHAY NAE KARSAKTAY UPPAR KHAIR HAI
function sum(){
b = 6; // Global variable because its without var
a = b + 5;
console.log("After calling funtion "+a);// Accessing global variable
}
//console.log("before calling function b "+b);//you cant bcuz bana nae abhi tak
console.log("before calling function A "+a);
sum();
console.log("B "+b);//b available outside of function
