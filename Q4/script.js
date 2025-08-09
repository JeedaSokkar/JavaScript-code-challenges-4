
const promiseFirst=new Promise((resolve,reject)=>{
    resolve("successfully")
   // reject("error")
})

promiseFirst
.then((result)=>console.log(result))
.catch(error=>console.error(error))
.finally(()=>console.log("Promise DONE"))