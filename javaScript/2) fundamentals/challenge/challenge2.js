function calcTip(value){
    if(value<=300 && value>=50){
        return value*0.15;
    }
    else{
        return value*0.2;
    }
}

const bill=[125,555,44];
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);