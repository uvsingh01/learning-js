// to ways to loop over an array

// 1) using for of

const arr = [1,2,3,4,5];

for(const item of arr){
    console.log(item);
}

for(const item of arr.entries()){ //way to get index in for of loop  && entries will create an array of element and its index [index,element]
    console.log(item[0]);
}


// 2) using forEach
// this method accepts functions
// break and continue will not work on this loop
const brr =[];
arr.forEach(function(item,index,array){//the parameters should be in order like this value, index , array (in the case of array) 
    console.log(item, index, array);
})

// 3) using forEach for maps

const currencies = new Map([
    ["USD", "United States Dollar"],
    ["EUR","Euro"],
    ["GBP","Pound Sterling"],
]);

currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`);
})

// using forEach for sets

const currency = new Set(["USD","INR","EUR"]);

currency.forEach(function(value, key, set){
    console.log(`${key} : ${value}`);
    //in this case the key will be same as value because in sets there
    //  is no key generation to keep the rule of forEach with 3 parameters they 
    // assigned the second value equals to the first value in case of sets
})


