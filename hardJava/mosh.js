//object in  javascript
// const person= {
//     name:"zaid",
//     walk: function(x){
//         console.log(`function in object is method ${x} `)
//            },
//     //talk(x) {console.log(`short es6 ${x} `)} //es6 feature
//     talk(x) {console.log(`short es6 ${x} `)}
// }
// person.walk("kaam pachis");
// person.talk("kaam double pachis")
// const  targetMember = 'name' // is an input field
// person[targetMember.value]="mosh"

//THIS
// const person = {
//     name:'zaid',
//     walk () {
//         console.log(this);
//     },

// };
// person.walk();
// const walk = person.walk.bind(person)// we can set the value of this
// //first argument is equal to this
// console.log(walk)
// walk()

//arrow function
// let square = function (number){
//     return number*number;
// }
// console.log(square(5));

// let tripler = (number) => number*number*number;
// console.log(tripler(3));
//  const jobs =[
//     {id:1, isActive: true},
//     {id:1, isActive: true},
//     {id:1, isActive: false},
// ]
// function jubba (jobs) {
//     return jobs.isActive;

// }
// const activeJobs  = jobs.filter(jubba)//jubba call back fuynction haik
// console.log(activeJobs)

// const activeJobs  = jobs.filter(jobs => (jobs.isActive))
// console.log(activeJobs)

//filter gives new array when (true) jub bracket mein true ajaye
// let number = [1,32,43,5,67,3,4,8];
// let isEven = number => (number % 2==0);
// let x = number.filter(isEven);
// console.log(x);

//arrow func and this
// const person = {
//     talk(){          //stand aloone function return window object
//         var self = this;
//         setTimeout( function (){
//             console.log('self', self)
//         },3000)

//     }
// };
// person.talk();

//arrow and this
// const person = {
//     talk(){          //stand aloone function return window object

//         //var self = this;
//         //arrow function dont rebind this
//         setTimeout( () =>{
//             console.log('self', this) // this give reference of object
//         },3000)

//     }
// };
// person.talk();

//map in javascript
// each item in Array to something else like 
// const jitnibaarchalay = ["zub","gub","shup"];
//  let item =jitnibaarchalay.map((n)=>{
//     console.log(n) //yeh jubba 3 bar awega
// })     
            
// const jitnibaarchalay = ["zub","gub","shup"];
// const maalik = jitnibaarchalay.map((n)=>{
//     const obj = {kaambolaytou:n}
//     return obj;
// })
// console.log(maalik)

// const jitnibaarchalay = ["zub","gub","shup"];
//  //this parenthesis tells that we are returning object
//                                     //  1  
// const maalik = jitnibaarchalay.map((n)=>({kaambolaytou:n}))
// console.log(maalik)

// const jitnibaarchalay = ["zub","gub","shup"];
// const maalik = jitnibaarchalay.map(n=>{
//     return ({kaambolaytou:n})
// })
// console.log(maalik)


        //des

























































































































































