function add(a,b,callback){
    callback(null,a+b)
}

function multiply(a,b,callback){
    callback(null,a*b)
}

function subtract(a,b,callback){
    callback(null,a-b)
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
// Refactor the code to avoid "callback hell
console.log("-------------------------")
function add1(a,b){
    return new Promise((resolve,reject)=>{
        resolve(a+b)
    })
} 
function multiply1(a,b){
 return new Promise((resolve,reject)=>{
        resolve(a*b)
    })
}

function subtract1(a,b){
  return new Promise((resolve,reject)=>{
        resolve(a-b)
    })
}

add1(4,6)
.then(sum=>{
    console.log(`SUM : `+sum)
    return multiply1(sum,3)
})
.then(product=>{
      console.log(`Multiply : `+product)
      return subtract1(product,4)
})
.then(result=>{
 console.log(` final result : `+result)
 
})
.catch(error=>{
    console.log("ERROR : "+error)
})