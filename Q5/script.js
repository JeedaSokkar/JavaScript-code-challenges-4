

const promise1=new Promise((resolve,reject)=>{
 fetch("https://jsonplaceholder.typicode.com/posts").then(data => resolve(data.json()))
 
})

const promise2=new Promise((resolve,reject)=>{
 
 fetch("https://jsonplaceholder.typicode.com/users").then(data => resolve(data.json()))
})

Promise.all([promise1,promise2])
.then(data=>console.log(data))
.catch(error=>console.log(error));

