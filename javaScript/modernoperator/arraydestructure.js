// Array destructure

// its very useful to return two value from same fn
// very useful when getting data from api


const arr =[1,2,3];
// hard way to assign multipe value of array to the variavles
const a = arr[0];
const b = arr[1];
const c = arr[2];
// easy way to assign variables
const [x,y,z] = arr;// this thing will not affect the real array
console.log(x,y,z); 

const arr2 = [1,2,3,4,5];
let [e, ,f] = arr2; //if we want some selected variable then we can leave space according to the array's order
console.log(e,f);

// what if we wan to swap the values of e and f

// hard way
// const temp = e;
// e=f;
// f=temp;

// best way

[e,f] = [f,e];
console.log("after",e,f);

// what if we want return two values from array of an object through method
const yuvi={
    arr:[10,20,30,40],
    order:function (fir, sec){
        return([this.arr[fir], this.arr[sec]]);///this will return the array 
    }
}

const [g,h]= yuvi.order(0,3);//here we getting the value of that variable from array object via method
console.log(g,h);

// to retrieve variable from array within an array

const uv=[1,2, ["yuv", "raju"]];
const [ , , [i,j]] = uv; //to retrieve an element from array within an array we have to leave spaces for unwanted elements and to create an array within array and then declare the variable
console.log(i,j);