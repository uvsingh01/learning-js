//  falsy values
// 🔺 0
// 🔺 ''
// 🔺 undefined
// 🔺 null
// 🔺 NaN

// and all the other values are truthy values

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

let money = 0;
 if(money){
    console.log("don't spend it all");
 }
 else{
    console.log("go get a job");
 }

money = 100;
if(money){
   console.log("don't spend it all");
}
else{
   console.log("go get a job");
}

let height;
if(height){
    console.log("its already defined");
}
else{
    console.log("its not defined");
}

height=10;
if(height){
    console.log("its already defined");
}
else{
    console.log("its not defined");
}
