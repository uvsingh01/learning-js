// Imediatelt invoked function expression

// these are only one time function
// these function gets invoked immediately
// these were made to avoid variable names pollution in global scope

// normal function
(function(){
    console.log("hello");
})();

// arrow fn
(()=>console.log("hello again"))();
