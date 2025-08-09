async function getData() {
    try{
      const dat1=await fetch("https://jsonplaceholder.typicode.com/users")


    const data2=await fetch("https://jsonplaceholder.typicode.com/comments")
    
        const result1=await dat1.json()
    console.log(result1)
    const result2=await data2.json()
    console.log( result2)
      
    }
    catch(error){
       console.error(error)
    }
    
}
getData()