// ❓Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both 
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about 
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
// m tall.


// TESTCASE 1

let marksHeight = 1.69;
let marksWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92
let bmiMark = marksWeight/marksHeight**2;
let bmiJohn = johnWeight/johnHeight**2;
console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//TESTCASE 2

marksHeight = 1.88;
marksWeight = 95;
johnHeight = 1.76;
johnWeight = 85;
bmiMark = marksWeight/marksHeight**2;
bmiJohn = johnWeight/johnHeight**2;
markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn);
console.log(markHigherBMI);






