const req = new XMLHttpRequest();
req.open("GET", "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
req.send();
// console.log(req.responseText);

req.addEventListener("load",function(){
    const data = JSON.parse(this.responseText);
    console.log(data);
})

const request = function(something){
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15")
    .then(function(res){
        if(!res.ok){
            throw new Error("not found");
        }
        return res.json()
    })//json is method used to read the response data from the body and its available to all the responses given by fetch
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err||"404"));
}

request(0);

const apicall = async function(){
    const req = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    const data = await req.json();
    console.log(data);
}
apicall();

const apicall1 = async function(){
    try{
    const req = await fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15");
    const data = await req.json();
    console.log(data);
    return `hello`;
    }
    catch(err){
        alert(err);
        throw err;//this is the way to handle error in async function because in async fn the promise will always be fulfilled
    }
    // console.log("there!"); hi way we can log something after the response of async
}

apicall1().then((res)=>console.log(res)).catch((err)=>console.log(err)).finally(()=>console.log("there!"));

