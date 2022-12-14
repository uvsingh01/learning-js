'use strict';
// this statement will enable strict mode

// ðº we can also activate strict mode
//  in a specific function and in a block

// ðº this mode hinder the chances of accidental errors

// ðº two reasons :-
//  it forbits us to do certain things
//  it does visible some error in case of strict mode 
// which is not present in normal mode

let hasDriverLicense = false;
const passTest = true;

if(passTest){
    hasDriversLicense= true; // ðºwe did mistake here and it did'nt pointed out without strict mode 
                            // beacause its created a global variable and that's why it didn't throw error in normal mode.
                            //  ðº but in strict mode it will throw an reference error 
}
if(hasDriverLicense){
    console.log("i can drive");
}

const interface = "audio"; //this will throw a reserved keyword error
const private = 23;//this will throw a reserved keyword error
const if = 24;//this will throw a reserved keyword error 