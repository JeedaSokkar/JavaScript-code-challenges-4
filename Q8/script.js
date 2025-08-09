function getDataCallback(callback) {
  setTimeout(() => {
    callback("Print after 3 seconds");
  }, 3000);
}

const getData=new Promise((resolve,reject)=>{
         setTimeout(()=>{
resolve("Print afte 3 ms")
        },3000)  
})
      
     

       

async function readData() {
          console.log("start") 
          const data=await getData;
          console.log(data)
          console.log("stop")
}

readData()