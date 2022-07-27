// TESTCASE 1

let marksHeight = 1.69;
let marksWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92
let bmiMark = marksWeight/marksHeight**2;
let bmiJohn = johnWeight/johnHeight**2;
// console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
if(markHigherBMI){
    console.log(`Mark's BMI ${(bmiMark)} is higher than John's ${(bmiJohn)}`);
}
else{
    console.log(`John's BMI ${(bmiJohn)} is higher than Mark's ${(bmiMarks)}`);
}


//TESTCASE 2

marksHeight = 1.88;
marksWeight = 95;
johnHeight = 1.76;
johnWeight = 85;
bmiMark = marksWeight/marksHeight**2;
bmiJohn = johnWeight/johnHeight**2;
markHigherBMI = bmiMark > bmiJohn;
if(markHigherBMI){
    console.log(`Mark's BMI ${(bmiMark)} is higher than John's ${(bmiJohn)}`);
}
else{
    console.log(`John's BMI ${(bmiJohn)} is higher than Mark's ${(bmiMark)}`);
}
// console.log(bmiMark, bmiJohn);
// console.log(markHigherBMI);