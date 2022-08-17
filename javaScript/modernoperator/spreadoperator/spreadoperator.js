// spread operator
// it is used when we have to take each element of an array separately 
// it doesn't create new variable and only useful when we have to write value separated by commas
// its similar to destructuring
// this is an es6 version

let arr =["kawasaki","royal enfield", "ktm", "harley"];
const arr1=[...arr];//this operator will take the values separately and put it in this array
arr=[2,3];//if we change the arr values then the newarr will be unaffected
console.log(arr1);

// to join more than 2 array

const arr2 =["hey","hello"];
const lastArr =[...arr, ...arr1, ...arr2];
console.log(lastArr);
// const lastArr=[arr,arr1,arr2] //🔴this will create an array within an arra


// to pass these in arguments
function orderFood(first,second,third){
    console.log(first,second,third);
}
const food =["Chaap","Rumali roti","Biryani"];
orderFood(food[0],food[1],food[2]);
orderFood(...food);//this is best way to pass something separated by commas