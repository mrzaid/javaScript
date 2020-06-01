const students = [
   { name:"zaid baba",subject:"mernstack",} ,
    {name:"zaid" ,subject:"aeronautical baba",}
]
 

function enrollStudent(student,callback){
    setTimeout(() => {
      students.push(student);
      console.log('students has been fetched');
      callback();
    },3000)

}
function getStudents(){
    setTimeout(() => {
        let str = "";
        students.forEach((studentall)=>{
            str += `<li> ${studentall.name} </li>
            <li> ${studentall.subject} </li>`
        }
        );
        console.log('students has been uploaded')
        document.getElementById('root').innerHTML=str
      },1000)
}
let newStudent = {name:"zaidsarkar",subject:"mechanical engineer"}
enrollStudent(newStudent,getStudents);
