console.log("before preparing the food")
//fn to fn oonce bckg fn done it calls your fnc
function prepareFood(callback) {
    setTimeout(() => {
        console.log("prepare food")
        callback("food is ready give this  value to foodcallBack")
    }, 200)
}
function prepareFrenchToast(callback) {
    setTimeout(() => {
        console.log("prepare french toast")
        callback("french toast is ready ")
    }, 200)
}
function  prepareCoffee(callback){
    setTimeout(() => {
        console.log("prepare coffe baby")
        callback("coffe is ready baby")
    }, 300);
}
function coffeeCallback(value){
    console.log("value= ",value)
}
function foodcallBack(value) {
    console.log("value = ", value)
    prepareFrenchToast(frenchtoastcallback)
}
function frenchtoastcallback(value) {
    console.log("value = ", value)
    prepareCoffee(coffeeCallback)
}
prepareFood(foodcallBack);




console.log('after prepare food dinner is ready')



















