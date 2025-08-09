function fetchData(url,callback){
 
fetch(url)
.then(response=>response.json())
.then(data=>callback(null,data))
.catch(error=>callback(error,null))

}
function processData(data, callback) {
  try {
   
    callback(null, data);  
  } catch (error) {
    callback(error, null);
  }
}
const url="https://jsonplaceholder.typicode.com/users"

fetchData(url,function(error,data){
    if(error){
        console.log("ERROR: ",error)
    }
    else{
       processData(data, function(error, processedData) {
      if (error) {
        console.error("Error processing data:", error);
      } else {
        console.log("Processed data:", processedData);
      }}
)}
})