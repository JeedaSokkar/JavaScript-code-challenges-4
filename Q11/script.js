function fetchData(url,callback){
    const request=new XMLHttpRequest();
    request.open("GET",url)
    request.send()

    request.onload=function(){
        if(this.readyState === 4 && this.status === 200){
            const data=JSON.parse(this.responseText)
            callback(null,data)
        }
        else{
            callback("somethig Error",null)
        }
    }
}
const url="https://jsonplaceholder.typicode.com/users"

fetchData(url,function(error,data){
    if(error){
        console.log("ERROR: ",error)
    }
    else{
        console.log("DATA : " ,data)
    }
})