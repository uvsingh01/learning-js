// USE OF AND AND OR OPERATOR
// they can return any datatypes  and use any datatypes


//⭕OR
console.log(3||"Yuvi"); // will return 3
// in this case the operator will check the first value if its correct then return if not then check the other value and  if thats true then it will return
console.log(""||"Yuvi");//will return Yuvi
// in this case empty string was false then it will return the other  value
console.log(true||0);//will return true
// in this case the first value was true so it  returned true
console.log(undefined||null);//will return null
// in this case undefined was false so it returned the null value becauuse the undefined value
// without checking the value it returns null because the first value was false
console.log(undefined||0||""||"Fuck"||23|| null) //will return fuck
// it returned fuck because as soon as this or operator sees a true value it will return it


const restro={
    pair:"bread",
}

// useful for checking if something present in something or not and to assign a default value if not found

// restro.guest=12;
// hard  way
const guest1=restro.guest?restro.guest:20; // this will do the same but its overwritten way
console.log(guest1);

// better way
const guest2= restro.guest || 10;//this is the better way to check 
console.log(guest2);

// ⭕AND
console.log(0&&"Yuvi"); //this will return falsy value 
// in this case the and operator will find truthy if it found falsy then return the earliest falsy
console.log(7&&"yuvi");//this will return yuvi
// in this case the and operator will look for all values if all are truthy then it will return the last truthy value
console.log("hello"&&23&&null&&"yuvi");//will return null
// as soon as it finds falsy value it will return it

// conclusion:- in and operator it will look for truthy if it finds all truthy then it will return last truthy and if it finds falsy then it will return the first falsy