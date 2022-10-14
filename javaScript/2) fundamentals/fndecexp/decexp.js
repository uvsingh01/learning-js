const year = 2001;

console.log(calAge1(year), calAge2(year)); // this will throw reference error bcause we called function expression before its creation 
// function declaration
// 🔺we can call function declaration before its creation
function calAge1(year){
    return 2037-year;
}


// function expression
// 🔺we cannot call function expression before its creation
const calAge2  = function (year){
    return 2037-year;
}

