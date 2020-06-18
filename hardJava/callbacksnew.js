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
function createPost(post,callback){
    setTimeout(() => {
posts.push(post)   ;
callback()     ;
    }, 2000);
}
createPost(
    {title:'post three',maal:"DEO"},
getposts,
)
// getposts();