// iteration over arrays

const arr=["Yuvraj","Raj","Paras","Raunak","Aniket"];
for(const item of arr) console.log(item);
// this is an es6 feature
// we ca use continue and break in this loop

for (const item of arr.entries()){//this entries will create a separate array with its index like [0,item]
    console.log(`${item[0]+1} : ${item[1]}`);
}

// using destructure
for(const [x,y] of arr.entries()){//this way we do not have to write item[0] manually
    console.log(`${x+1} : ${y}`);
}