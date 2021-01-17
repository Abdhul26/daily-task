var request =new XMLHttpRequest;
request.open("GET",'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    console.log(data.length); 
    let total = data.forEach(data=>{console.log(data.name);console.log(data.flag);console.log(data.capital)});
    
  
}

