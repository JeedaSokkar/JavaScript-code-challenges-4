function add(a,b,callback){
    setTimeout(()=>{
callback(null,a+b)
    },2000)
    
}

function multiply(a,b,callback){
      setTimeout(()=>{
 callback(null,a*b)
    },3000)
   
}

function subtract(a,b,callback){
      setTimeout(()=>{
 callback(null,a-b)
    },2000)
   
}

add(4,6,function(error,sum){
    if(error){
       return console.log(error)
    }
    console.log(`SUM: `+sum)

    multiply(sum,3,function(error, product){
        if(error){
           return console.log(error)
        }
        console.log(`Multiply : `+product)
  
    subtract(product,4,function(error,result){
          if(error){
           return console.log(error)
        }
        console.log(` final result : `+result)
    })
}) 
 })