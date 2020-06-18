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
// createPost( 
//     {title:'post three',maal:"DEO"})
//     .then(getposts)
//     .catch(err => console.log(err))
const promise1 = Promise.resolve("helo woeld");
const promise2 = 10;
const promise3  = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"goodbye")
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
Promise.all([promise1,promise2,promise3,promise4]).then(values=>
    console.log(values))