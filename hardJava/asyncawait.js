const posts= [
    {title:'post oone',maal:"habad"},
    {title:'post TWEO',maal:"DEO"},
];
function getposts(){
    setTimeout(() => {
        let output = ''
        posts.forEach(
            (post)=>{
    output += `<li>${post.title} </li>`;
            }
        );
        document.body.innerHTML=output;
        
    }, 1000);
}
function createPost(post){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        posts.push(post)   ;
        let error = false;
        if(!error){
            resolve()
        }
        else{
            reject("something went wrong bhai")
        }    
    }, 2000);
});
};

// async function init(){
//     await createPost( 
//     {title:'post three',maal:"DEO"});
//     getposts()
// }
// init()


async function fetchUsers(){
   const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    
   const data = await res.json()
console.log(data);

}
fetchUsers()