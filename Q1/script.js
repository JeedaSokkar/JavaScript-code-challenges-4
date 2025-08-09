
const element=new Promise((resolve,reject)=> {
    setTimeout(()=>{
resolve("Success")
    },2000)

})
element.then((message)=>{
console.log(message)
})