// console.log("a");
// setTimeout(function(){
//     console.log("b");
// },2000)
// console.log("c")

function helloWorld(abc){
    abc();
}
helloWorld(function(){
    console.log("hello from inner function of helloWorld");
}) 