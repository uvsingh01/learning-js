
// `Q1.  Print Fizz Buzz.
// Description: Write a program that prints the numbers from
//  1 to 20 and for multiples of 
// '3' print "Fizz"  
// '5' print "Buzz"
// '3' and '5' both print "FizzBuzz"
// else number itself

for(let i=1; i<=20; i++){
    console.log(i);
    
    if(i%3===0 && i%5===0){
        console.log("fizz buzz");
    }
    else if(i%3===0){
        console.log("fizz");
    }
    else if(i%5===0){
        console.log("buzz");
    }
}