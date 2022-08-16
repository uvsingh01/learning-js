const obj={
    fName:"Yuvraj",
    lName:"Singh",
    contactNo:"0123456789",
    method:function(){
        console.log("true");
    }
};


// unlike array we have to write exact name in the curly braces to retrieve the elements of objects.
// when we have to retrieve any element we do hot have to give spaces in between like arrays we only have to give exact name of the property without any specific order.
// its helpful when we call an api
const {fName,lName,contactNo} = obj;
// const (a,b,c) =obj //🔴this will throw error
console.log(fName, lName, contactNo);

// what if we want to chnage the name of variabble according to us then we can do this:-
const {fName: f, lName : l, contactNo:c} = obj; //in this way we can change the property name to new variable name but obj property will remain unchanged
console.log(f,l,c);
console.log(obj);