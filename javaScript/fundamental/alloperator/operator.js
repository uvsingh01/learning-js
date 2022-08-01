// 🔺equal operator are of two types
// 🔺strict operator (===)
// 🔺loose operator(==)
const c =true;
const b = false;
const d = c&&b;
const a =10;
if(a===10)//this is the preffered method in js to compare things
{
    console.log("this is strict operator comparison");
}
else if(a==10) // this is not a good practise
{
    console.log("this is loose operator comparison");
}
else{
    console.log("not equal");
}

// strict operator
// 🔺this will check both the value and datatypes of a given variable then make decision

// loose operator
// 🔺this will check only the value of variable irrespective of there datatype


// logical operator

const drunk = true;
const driving = false;
// And operator (&&) 
// 🔺 this operator is used for checking the condition of multiple 
// boolean if all are true then it will return true.

if(drunk&&driving){
    console.log("do not drive");
}
else{
    console.log("you can drive");
}

// Or operator (||)
//  🔺 this operator is used for checking the condition of multiple 
// booean if one of them are true then it will return true.

if(drunk || driving){
    console.log("do not drive");
}
else{
    console.log("you can drive");
}

// Not operator (!)
// 🔺 this operator is used for converting a boolean into opposite like true to false and false to true

if(!drunk && !driving){
    console.log("do not drive");
}
else{
    console.log("you can drive");
}


// ternary operator

// 🔺 this the operator used when we have to take quick decision

// 🔺this is the great replacement for small if-else statements
const age = 21;
const x = age>=18 ? "alcohol" : "water";
console.log(`can drink ${x}`);