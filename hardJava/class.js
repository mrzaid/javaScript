class Employee{
    constructor(givenName,givenExperience,givenDivision){

        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }
 slogan(){
     return (`I am ${this.name} and i am mernstack developer`);
 }
 joiningYear(){
   return( 2020 - this.experience)
 }
 static sum(a,b){
     return (a+b);
 }
}


//   jubba = new Employee ("zaid",20,"baap")
// //     // console.log(slogan("zaid"));
 
// //  console.log(jubba)
// console.log(jubba.joiningYear());
// console.log(Employee.sum(5,6));


class Programer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
     super(givenName,givenExperience,givenDivision)   
     this.language = language
     this.github = github
    } 
    newProgramer(){
        if(this.language=="react"){
            return (` ${this.name} favorite language is ${this.language}`)
        }    
        else{
            return "JAVASCRIPT"
        }    
    }    
  static multiplier(a,b){
      return (a*b);
  }      
}  

zaid = new Programer("zaid",5,"mernstack","react","mrzaid");
// console.log(zaid);
console.log(zaid.newProgramer());
console.log(Programer.multiplier(98,54))