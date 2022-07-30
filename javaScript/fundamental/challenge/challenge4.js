const bill= 430;
const tip = bill<=300 && bill>=50 ? bill*0.15 : bill*0.2;
const total = bill+tip;
console.log(`the bill was ${bill} and the tip was ${tip} and the total value is ${total}`);
