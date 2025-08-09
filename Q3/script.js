const promise1=new Promise((resolve,reject)=>{
    resolve("This is the first promise")
})

const promise2=new Promise((resolve,reject)=>{
    resolve("This is the seconed promise")
})
//promise1.then((result)=>console.log(result))
//promise2.then((result2)=>console.log(result2))

Promise.all([promise1,promise2]).then((result)=>console.log(result))