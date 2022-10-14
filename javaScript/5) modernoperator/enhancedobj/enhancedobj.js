// there are 3 types of enhancement in objects

const restro={
    pair:"bread",
    arr:[1,2,3],
    calculate : function(){
        console.log(1+2);
    }
}

// 1)we can write functions more efficiently

const restro1={
    pair:"bread",
    arr:[1,2,3],
    calculate(){ //we do not have to write any function keyword to define a function
        console.log(1+2);
    }
}
restro1.calculate();

// 2) we can write objects inside object more efficiently

const obj ={
    first:"first",
    second:"second"
}

const restro2={
    pair:"bread",
    arr:[1,2,3],
    calculate(){ //we do not have to write any function keyword to define a function
        console.log(1+2);
    },
    obj1:obj,//⭕before es6 we used to do this
    obj,//this is an es6 feature to directly write the name of the object
}
console.log(restro2);

// we can manipulate the property name 
const friends = ["Raj","Raunk","Paras"];
const restro3={
    pair:"bread",
    arr:[1,2,3],
    calculate(){ //we do not have to write any function keyword to define a function
        console.log(1+2);
    },
    obj1:obj,//⭕before es6 we used to do this
    obj,//this is an es6 feature to directly write the name of the object
    [friends[0]]:"Nice",
}

console.log(restro3);
