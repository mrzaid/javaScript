// fetch return promise 
// and then response return
// another promise jisko hum .json laga kar data get kareingay 


// get api get data
async function fetchingData() {

    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    const data = await response.json
    console.log(data);
}
// fetchingData()


// post api send data to server and database
async function postData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            title:"my data",
            body:"data",
            userID:4
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    });
    console.log("response = ",response)
    const data = await response.json()
    console.log("data",data);
}
postData()
