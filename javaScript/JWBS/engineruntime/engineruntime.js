//⭕ js Engine program that executes JavaScript code
 

//⭕ compilation
// entire code is converted into machine code at once and that file can be excuted by a computer


//⭕interpretation
// interpreter runs through the source code and executes it line by line
// problem of interpreted llanguage is that its too much slower 
// 

//⭕ modern interpretation
// JIT - compilation use both compilation and interpretation.
// first the code will be converted to machine code at once, then excute it immediatly but there will be no file created while compiling.

//⭕how js code enters in engine
// first code will be parsed and break into chunks 
// then it goes for compilation
// and then goes for execution
// excution happens in callstack
// and in modern engines use optimisation strategies
// at first they use very unoptimised version of javascript code and then run it
// after the execution of js it will optimise the code in background again and again
// after that it unoptimised js code gets removed 

//⭕ runtime in the browser
// js engine
// web API
// callback queue 


//⭕ about callback queue and event loop
// when we call a call back function like domevent 
// as soon as we hit event the function will be called in callback queue 
// and it will go in call stack as soon as call stack gets empty by event loop 