
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


// async with declaration await with calling
async function startProcess(){
try {
    
    let foodvalue = await prepareFood()//wait till prepare food is done
    console.log(foodvalue)//this line will wait until food is prepare
    let frenchtoastvalue =await prepareFrenchToast()
    console.log(frenchtoastvalue)
    let coffevalue = await prepareCoffee()
    console.log(coffevalue)
    
} 
catch (error) {
console.log("Catch error",error);
    
}
}
startProcess()

console.log('after prepare food dinner is ready')

