// to ways to loop over an array

// 1) using for of

const arr = [1,2,3,4,5];

for(const item of arr){
    console.log(item);
}

for(const item of arr.entries()){ //way to get index in for of loop
    console.log(item[0]);
}


// 2) using forEach
// this method accepts functions
// break and continue will not work on this loop
const brr =[];
arr.forEach(function(item,index,array){
    console.log(item, index, array);
})

