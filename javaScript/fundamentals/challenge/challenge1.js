const calcAverage=(first,second, third)=>{
    return (first+second+third)/3;
}
const checkWinner=(avg1, avg2)=>{
    console.log(avg1, avg2);
    if(avg1>2*avg2){
        console.log(`Dolphin wins!`);
    }
    else if(avg2>2*avg1){
        console.log(`Koala wins!`)
    }
    else{
        console.log(`no team wins!`);
    }
}

// testcase 1
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);
checkWinner(avgDolphins, avgKoalas);


// testcase 2 
avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);
checkWinner(avgDolphins, avgKoalas);
