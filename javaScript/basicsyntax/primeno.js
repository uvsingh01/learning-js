// var name = readLine("What is your name?");
// var num = readInt("What is your favorite number? ");
// let name=prompt("What is your name?");
const low =2;
const high=100;

for(let i=low; i<=high; i++){
    let br=0;
    for(let j=2; j<i; j++){
        if(i%j===0){
            br=1;
            break;
        }
    }
    if(i>1 && br===0){
        console.log(i);
    }
}