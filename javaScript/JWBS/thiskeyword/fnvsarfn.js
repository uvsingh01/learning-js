'use strict'
const yuvi = {
    firstName :"Yuvraj",
    year : 2001,
    calcAge :function(){
       const nothing = 0; 
    },
    calcAge2: function(){
        console.log(2022-this.year); //this will points towards the object which is called

        const another = function (){
            console.log(this); //in strict mode this will point towards the undefined and in browser will point towards window object
            //when we call a regular function then this will point towards window object
        }
        another(); 
        // solution 1 to cope up with this keyword problem
        const self=this;
        const expanother = function(){
            console.log(`${self.firstName}`); // this will givve name as output
        }
        expanother();
    },
    greet : ()=> console.log(`hey ${this.firstName}`), // this will give undefined because arrow function doesn't have its this keyword it borrows it from its parent scope
};
yuvi.greet();
yuvi.calcAge2();

function exp(a,b){
    console.log(arguments);//argument keyword only available for regular fns 
}
// exp(1,2);
const arrowexp = (a,b)=>{
    console.log(arguments); //will throw reference error because arguments are available only for regular fn (in browser)
}
arrowexp(1,2);