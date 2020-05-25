// //promt usage
// var name = prompt("What is Your Name");
// console.log(name);


// var question = "What is Your Name";
// var defaultAnswer = "John";
// var name = prompt(question, defaultAnswer);
// console.log("Name =" + name);
// var age = prompt("What Is Your Age in integer");
// var newage= 5 + parseInt(age)
// console.log(newage)
// var age = prompt("What Is Your Age float");
// var newage= 5 + parseFloat(age)
// console.log(newage)
// //cannot pass alphabets and spaces in number
// // true 1, falso 0 this will number function do
// var age = prompt("What Is Your Age whatever it will just convert string to float/int");
// var newage= 5 + Number(age) //decimal tou decimal float tou float
// console.log(newage)
// //also use + will do same work as number
// var age = +prompt("What Is Your Age float");
// var newage= 5 + age;
// console.log(newage)
// var a=6;
// var b=9;
// console.log(a == b)
// console.log(a == b)
                                //////////Logical operators
        //and operator requires one false then all false
        // var x = 5;
        // var y = 10;
        // var a = 30;
        // var b = 15; //triple equal to also matches the type
        // if(x+y === a-b){
        //     alert("Correct")
        // }
        // else{
        //     alert("Incorrect")
        // }
        
        // var a = 10;
        // if(a !== 15){
        //     document.write("Correct")
        // }
        // else{
        //     document.write("Incorrect")
        // }
// var a=8;
// var b=9;
// var c = a < b && b<10  //all true
// console.log(c)
// var a=8;
// var b=9;
// var c = a > b && b<10 //one false
// console.log(c)
// var a=8;
// var b=9;
// var c = a > b || b<10 //one true
// console.log(c)
// var a=8;
// var b=9;
// var c = a > b || b>10 //all false
// console.log(c)
  //not and double not operators
// var a = 9;
// var b= a>100;
// var c= !b;
// var d =  ! (a>100);
// var e = !!(a>100);
// console.log("A = "+a);
// console.log("B = "+b);
// console.log("C = "+c);
// console.log("D = "+d);
// console.log("E = "+e);

// var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }


// var x = "Enter value";  //prompt heading
// var y = "PLEASE REMOVE THIS AND TYPE VALUE" // inside user input button
// var a = +prompt(x,y);
// var b = a + 10;
// document.write("The output is" + " " + b)

            //////////////////// if and else
// var age = +prompt("Enter Your age");
// //age = Number(age);
// //age = parseInt(age);
// if (age == 18){
//     console.log("your age is eqaul")
// }
// else if (age < 18){
//     console.log("your age is less")
// }
// else {
//     console.log("your age is more")
// }
// var age = +prompt("Enter your age please");
// var gender = prompt("Enter your gender please");
// if (age > 18 || gender=="male"){
//     console.log("you are allowed to marry")
// }
// else{
//     console.log("you are'nt allowed to marry")
// }
                //report cards
// var percent = +prompt("Enter your percentage");
// if (percent>=80 && percent < 100){
//     alert("A+")
// }
// else if(percent>=70 && percent < 80){
//     alert("A");
// }
// else if(percent>=60 && percent < 70){
//     alert("b+");
// }
// else if(percent>=50 && percent < 60){
//     alert("c");
// }
// else if(percent>=40 && percent <50){
//     alert("d");
// }
// else if(percent>=30 && percent <40){
//     alert("failed");
// }
// else  {
//     alert("Please enter correct percentage");
// }
        //nested else if
// var score = +prompt("Enter your score please");
// if (score >80){
//    if (score >90){
//     console.log("reward 100$")
//    }
//    else if (score ==87.45){
//     console.log("reward 10$")
//    }
//    else if (score >85){
//     console.log("reward 50$")
//    }
   
   
// }
// else {
//     console.log("you are failed")
// }
                //conversion to boolean pass in if to convert in true & false
// var age = null; 
// //any number or string
// if (age){
//     console.log("In if age "+ age)

// }  
// // null undefined 0
// else{
//     console.log("in else age "+ age)
// }              
// var a = 6;
// var b= 8;
// var c= a && b;
// console.log(c);
// var a = 6;
// var b= 8;
// var c= false && true;
// console.log(c);

// var c= "" && true; //" " this is true yaad rakhien
// console.log(c);
// var c= "" || true;
// console.log(c);
// var a = 6;
// var b= 8;
// var c= a && b;
// console.log(c);
// var a = 6;
// var b= 8;
// var c= a && b;
// console.log(c);
// var a = 6;
// var b= 8;
// var c= a && b;
// console.log(c);
                            // for loops
// for (var i = 0 ; i<=10;i++){
//     console.log(i)
// }
// for (var i = 10 ; i>=0;i--){
//     console.log(i)
// }
// for (var i = 0;i<=10;++i){
//     console.log(i)
// }
// var tableof = +prompt("table of");
// var till = +prompt("till");
// for (var i = 1; i<=till;i++){
//     console.log(tableof +" X "+i+" = " + (tableof* i) );
// }
// for (var i = 0 ; i<=10;i++){
//     if (i==5){
//        //break; 
//        continue;
//     }
//     console.log(i)
// }



                        // Array
// var name =  "ghous";
// var name1 = "basit";
// var name2 = "ali"

// console.log(name1)
// console.log(name2)



// var students = ["ghous","basit","ali",123]


// alert("Wellcome " + students[3] )


// var names = [];


// names[0] = "Ghous";
// names[1] = "Basit"

// console.log(names)




// students.pop() //remove end value


// students.push("Bilal","Zunaib") //push value to end



// students.shift()  //remove element from start

// students.unshift("Bilal","Zunaib") //add element at start

// var students = ["ghous","basit","ali","bilal","zunaib"]

// students.splice(1,1)

// var copyStudents = students.slice(1,4)

// console.log(students)

// console.log(copyStudents)










