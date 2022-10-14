// reference 1
let age = 21;
let oldAge = age;
age =22;
console.log(age);
console.log(oldAge);

// reference 2
const myself={
    name:"Yuvraj",
    age:21,
};
const friend = myself;
friend.age = 22;
console.log(myself);
console.log(friend);//if we change one of them then both will be changed
// conclusion

// 1st
// what happened is that we declare a let variable age equals 21
// then we declare an oldage let variable equals to age
// then will happen is that till line 2 both had same value in the stack 
// but in line 3 as soon we change value of age to 22 then oldage 
// remains same as 21 because in call stack the new memory was allocated to 
// the age variable.


        // callStack                    heap memory
// |-----------------------|    |--------------------------|  
// |identifier   add  value|    |                          |
// |  age       001    21  |    |                          |
// |  oldAge    002    22  |    |                          |
// |                       |    |                          |
// |                       |    |                          |
// |                       |    |                          |
// |                       |    |                          |
// |                       |    |                          |
// |                       |    |                          |
// |-----------------------|    |--------------------------|

// age will point towards value 22
// old age will point towards value 22
// primitive are handled in stack they does 
// not have any reference to the heap memory
// primitive stored in execution context in which
// they are declared



// conclusion

// 2nd

        // callStack                    heap memory
// |-----------------------|    |--------------------------|  
// |identifier   add  value|    |   add           value    |
// |  age ---\     001  21 |    |                          |
// |  oldAge  \--> 002  22 |    |   d30f           object  |
// |                       |    |                          |
// |  myself---> 003  d30f |    |                          |
// |           ^           |    |                          |
// |          /            |    |                          |
// |         /             |    |                          |
// | friend /              |    |                          |
// |-----------------------|    |--------------------------|


// myself and friend will point towards same add value in stack 
// instead of value the address of heap is there to have the reference 
// of object and thats why can change the value of const object
// because we are not changing the value in stack but manipulating 
// the value in heap and thats allowed in js


// to solve the problem of same obj pointing towards same
// address in the heap memory we can use shallow copy

// shallow copy
// Object.assign() is function which will merge two objects 

const friend2 = Object.assign({},myself);
// this will not be able to handle the object within an object like

const yuvi = {
    name:{
        fName: "Yuvraj"
    },
    friends:"Raj"
}

const friends3 = Object.assign({},yuvi);
yuvi.contact ="00000";//if we change within an object then the change will not occur in friends3
yuvi.name.lName = "singh";// but if we change in the object of the object then the change will reflect in friends3
console.log(friends3);
console.log(yuvi);