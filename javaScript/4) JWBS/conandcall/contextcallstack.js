//โญ Execution context
// its a context where everything is present which is required to execute a code
// environment where the piece of javascript is executed

//๐ there's only one global execution context
// default context, created for code that is not inside 
// any function (top level).

//๐ after the execution of top level code 
// excution of functions happens and waiting for callbacks

//๐ one execution context per function
// for each functiom call a new execution context is created

// โญ inside execution context
// ๐variable environment
// ๐scope chain
// ๐this keyword

// all this content is created during creation phase
// note :- arrow function do not have arguments object and this keyword

// โญ call stack
// ๐ its basically a place where each execution context gets stacked 
// on the top of each other,  to keep track of where we are in the execution
