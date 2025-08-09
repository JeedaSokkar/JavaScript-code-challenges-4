const getData1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("get Data 1");
    },1000)
})

const getData2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("get data 2")
    },2000)
})

const getData3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("get data 3")
    },3000)
})

async function readData(){
    try{
const data =await Promise.all([getData1,getData2,getData3])
console.log(`ALL DATA :  ${data}`)
    }
    catch(error){
        console.log(error)
    }
}
readData()