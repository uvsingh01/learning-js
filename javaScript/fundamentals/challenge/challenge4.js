function calcTip(value){
    if(value<=300 && value>=50){
        return value*0.15;
    }
    else{
        return value*0.2;
    }
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i =0; i<10; i++){
    tips[i]= calcTip(bills[i]);
    totals[i]= calcTip(bills[i])+bills[i];
}
console.log(tips);
console.log(totals);

function calcAverage(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}


console.log(calcAverage(totals));
console.log(calcAverage(tips));
