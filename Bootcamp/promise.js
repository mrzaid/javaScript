// a promise takes a function which
// passes more 2 functions as its parameters

console.log("before preparing the food")
//fn to fn oonce bckg fn done it calls your fnc



function prepareFood(data) {
    let promise = new Promise(
        function (resolve,reject) {
            setTimeout(() => {
                if (data !==2){
                    console.log("prepare food")
                    resolve("food is ready")

                }
                else{
                    reject("anarth hogaya")
                }
            }, 200)
            
    }
    )
    return promise
        
    
}
function prepareFrenchToast() {
    let promise = new Promise(
        function (resolve,reject) {
            setTimeout(() => {
                console.log("prepare french toast")
                resolve("french toast is ready ")
            }, 200)        
    }
    )
    return promise
    
}
function  prepareCoffee(){
    let promise = new Promise(
        function (resolve,reject) {
            setTimeout(() => {
                console.log("prepare coffe baby")
                resolve("coffe is ready baby")
            }, 300);
    }
    )
    return promise
}


let promise = prepareFood(3)
console.log(promise)
promise.then(result => {
    console.log("result of food promise:",result)
    return prepareFrenchToast()
})
.then(frenchtoastresponse=>{
    console.log("result of frenchtoast promise:",frenchtoastresponse)
    return prepareCoffee()
})
.then(coferesult=>
        console.log("result of coffe promise:",coferesult)    
)
.catch(err => {
    console.log("error:",err)    
});


console.log('after prepare food dinner is ready')

