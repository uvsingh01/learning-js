// ⭕map
// map will return a new array(with same size of applied array) //like if we have an array of size 5 then it will return an array of size 5
// it will take a callback function
// it will not affect real array

const num = [1,2,3,4,5];

const convert = num.map(function(item, index, arr){ //we can have these arguments in map method
        return item*item; //when we return then only the element of new array will be formed
})

// writing above code in arrow function

const convert1 = num.map((item)=>item*item);
console.log(convert);
console.log(convert1);

// use case of map

const acc1= {name:"Yuvraj Singh", arr:[-100 ,-2200, 400, 5500, 5443,7667,]};
const acc2 = {name:"Raj Gupta", arr:[-100 ,-2200, 400, 5500, 5443,7667,]};
const acc3  ={name:"Raunak Sharma", arr:[-100 ,-2200, 400, 5500, 5443,7667,]};
const acc4 = {name:"Shyam Jaiswal", arr:[-100 ,-2200, 400, 5500, 5443,7667,]};

const acc = [acc1,acc2,acc3,acc4];

// now we have to create a username of the person according to ther first letter  of firstname and lastname

function usernames(arr){
        arr.forEach(element => {
                element.username = element.name
                .toLowerCase()
                .split(" ")
                .map(item=>item[0])
                .join("");
                // console.log(element.username);
        })
}
usernames(acc);
console.log(acc);

// ⭕filter method
// it will take callback function
// it will create a new array based on the condiition 
// the size of array will depend upon the condition

const money = [-100 ,-2200, 400, 5500, 5443,7667, -4322, 8764,-7878];//this is the list of withdrawal and deposits

// array of deposits
const deposits = money.filter((item,index,arr)=>item>0 );
console.log(deposits);

// array of withdrawals
const withdrawals = money.filter((item,index,arr)=>item<0);
console.log(withdrawals);

// ⭕reduce
// its use to boil down the value of array into one value
// it will return only one value

// let we take our array of money 
const balance= money.reduce(function(acc,cur,ind,arr){
        console.log(`${acc} at index ${ind}`);
        return acc+=cur;
},0)//here 0 is the initial value of accumilator
console.log(balance);


// 🔺this is the use case of all three of them using chaining

// if we want to get deposits and convert them into usd and show the total amount

const depoInUSD= money.filter(item=>item>0).map(item=>item/80).reduce((acc,item)=>acc+=item,0);
console.log(depoInUSD);

// ⭕find
// it will return the value itself if found
// it will return the first value which satisfy the condition

const firstWith = money.find(item=>item<0);
const firstWithdrawal = money.find(item=>item>10000);
console.log(firstWith);
console.log(firstWithdrawal);//this will give undefined if not found

// to find the name of owner
const account = acc.find(user=>user.name ==="Yuvraj Singh");
console.log(account);

// 🔺find index of an element in array
// this will return a Number
// we use this mehtod when we have to deal with objects within an 
const number = money.findIndex(function(cur, index, arr){
        return cur>5000
});
console.log(number);

// 🔺some method
// use to check multiple thing based on the condition if some of them are true then it will return true

const anyDepo = money.some(item=>item>0);
console.log(anyDepo);

// 🔺every method
// use to check multiple thing based on the condition if all of them are true then it will return true

const anyDepo1 = money.some(item=>item>10000);
console.log(anyDepo1);

// separate callback
const cond = item=>item>0;//DRY principle
console.log(money.some(cond));
console.log(money.every(cond));
console.log(money.filter(cond));

// 🔺flat
// when we have to bring all the inner elements in an array to only one suface

const arr=[[1,2,3],4,5,[7,8]];
console.log(arr.flat());

// if we want to flat a deep array
const arr1=[[1,2,3,[9,9,9,]],4,5,[[6,6,6,],7,8]];
console.log(arr1.flat(2));//2 here is the depth of sub-array
// flatMap 
// use to add the multiple array present in different object into an single array
// then flat used to put all of the value out of inner arrays to outer

const bal = acc.map(item=>item.arr)
.flat();
console.log(bal);
// using flatmap
const bal1= acc.flatMap(item=>item.arr);
console.log(bal1);


// sort an array of integer

money.sort((curval,nextval)=>{ //ascending order
        if(curval>nextval)
        return 1;
        if(curval<nextval)
        return -1;
})
console.log(money);

money.sort((curval,nextval)=>{ //descending order
        if(curval>nextval)
        return -1;
        if(curval<nextval)
        return 1;
})
console.log(money);