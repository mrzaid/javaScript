            //var
// console.log("Hello World");
// console.log("test data",a)
// var a ;
// var a=5;
// console.log("updated data",a)

            //let
// console.log("Hello World");
// //console.log("test data",a)
// let a=5;
// a=7;
// //let a=6;// canot redeclare let
// console.log("updated data",a)

        //const
// console.log("Hello World");
// //console.log("test data",a)//you cant call it up here

// const a=5;
// console.log("updated data",a)
// //a=7;//interpreter will stop here
// console.log("updated data 2",a)


//         //USING VAR IN FOR LOOP for blockscope
// var a=5;
// for(var b=0;b<2;b++){

// var c=b+2;     
//     a=56; //you can change value in for loop but not in function
//     console.log("B= ",b)
//     console.log("C= ",c)
//     if(b===0){
//         console.log("One for loop completed its iteration")
//     }
// }
// console.log("A= ",a)
// console.log("B= ",b)
// console.log("C= ",c)

//         //USING let IN FOR LOOP for blockscope

// var a=5;
// for(var b=0;b<2;b++){

// const c=b+2;     //blockscope hai bahar ni milega
//     a=56; //you can change value in for loop but not in function
//     console.log("B= ",b)
//     console.log("C= ",c)
//     if(b===0){
//         console.log("One for loop completed its iteration")
//     }
// }
// console.log("A= ",a)
// console.log("B= ",b)
// console.log("C= ",c) //error





                    // Hoisting variables

//var a=100//when we dont pass parameter we can change global var in fn
// var a=100

// function hoist() {
//     a = 20;
//     var b = 100;
//   }
  
//   hoist();
//   console.log(a); 
  
  /* 
  Accessible as a global variable outside hoist() function
  Output: 20
  */
  
 //console.log(b); 
  /*
  Since it was declared, it is confined to the hoist() function scope.
  We can't print it out outside the confines of the hoist() function.
  Output: ReferenceError: b is not defined
  */

 //'use strict'; dontknow
                //Hoisting functions
                // console.log("hello world")
                // Hello();
                // console.log("hello world after invoking and  ")
                // function Hello(){
                //     console.log("HELLO FROM FUNCTION in declaration which will go up");
                // }
                //var exp; yahan agaya
                console.log("hello world")

                //Hello();
                //exp(); //undefine pay action perform nae hota hai 
                console.log("exp",exp)

                //console.log("hello world after invoking and  ")

                var exp = function (){
                    console.log("HELOO FROM INSIDE OF A FUNCTION")
                }
                exp();//yahan call karsaktay hou

                //function Hello(){
                 //   console.log("HELLO FROM FUNCTION in declaration which will go up");
                //}
                






