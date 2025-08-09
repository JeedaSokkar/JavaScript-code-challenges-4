const message=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Something went wrong")
    },1000)
})
message.then((mess)=>{
    console.log(mess)
}).catch((error)=>{
    console.error(error)
})