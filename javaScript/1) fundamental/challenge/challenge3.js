// testcase 1
let d1 = 96;
let d2 = 108;
let d3 = 89;
let k1 = 88;
let k2 = 91;
let k3 = 110;
let avgd =  (d1+d2+d3)/3;
let avgk = (k1+k2+k3)/3;
console.log(avgd, avgk);
if(avgd > avgk){
    console.log("Dolphin wins");
}
else if(avgk > avgd){
    console.log("Koala wins");
}
else{
    console.log("tie");
}

// testcase 2
d1 = 97;
d2 = 112;
d3 = 101;
k1 = 109;
k2 = 95;
k3 = 123;
avgd =  (d1+d2+d3)/3;
avgk = (k1+k2+k3)/3;
console.log(avgd, avgk);
if(avgd > avgk && avgd>=100){
    console.log("Dolphin wins");
}
else if(avgk > avgd && avgk>=100){
    console.log("Koala wins");
}
else{
    console.log("tie");
}

// testcase 3

d1 = 97;
d2 = 112;
d3 = 101;
k1 = 109;
k2 = 95;
k3 = 106;
avgd =  (d1+d2+d3)/3;
avgk = (k1+k2+k3)/3;
console.log(avgd, avgk);
if(avgd > avgk && avgd>=100){
    console.log("Dolphin wins");
}
else if(avgk > avgd && avgk>=100){
    console.log("Koala wins");
}
else{
    console.log("tie");
}