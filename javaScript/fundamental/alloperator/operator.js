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


// logical operator

const drunk = true;
const driving = false;
// And operator (&&) 
// 🔺 this operator is used for checking the condition of multiple 
// booean if all of them are true then it will return true.

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
