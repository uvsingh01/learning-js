//⭕ Execution context
// its a context where everything is present which is required to execute a code
// environment where the piece of javascript is executed

//🛑 there's only one global execution context
// default context, created for code that is not inside 
// any function (top level).

//🛑 after the execution of top level code 
// excution of functions happens and waiting for callbacks

//🛑 one execution context per function
// for each functiom call a new execution context is created

// ⭕ inside execution context
// 🛑variable environment
// 🛑scope chain
// 🛑this keyword

// all this content is created during creation phase
// note :- arrow function do not have arguments object and this keyword

// ⭕ call stack
// 🛑 its basically a place where each execution context gets stacked 
// on the top of each other,  to keep track of where we are in the execution
