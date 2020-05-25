// var i=0;
// // while (i < 10) { //executes till condition is truw
// //     console.log("I " + i);
// //     i++;
// //     }

// do {
//     console.log("I " + i);
//     i++;
//     }
//     while (i < 10);
 var doContinue=true;
 while (doContinue){
     console.log("Hello Jubba");

     var userInput= prompt(`Do you want to continue?
Then press Y if not then
press any other key`);
     if(userInput.toLowerCase() !== "y"){
         doContinue=false;
     }
 }
 console.log("after loop")