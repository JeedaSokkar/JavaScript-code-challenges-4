async function getData(){
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await response.json()
    console.log(data)
    return(data) 
    }
    catch(error){
        console.log(`ERROR ${error}`)
    }
   
}
getData()