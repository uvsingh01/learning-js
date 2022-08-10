const friends = ["Yuvraj", "Raj", "Paras"];

// add the element in the last
friends.push("Aman");
const newLength = friends.push(); // this will return the no. of elements in a string
console.log(friends);
console.log(newLength);

// add element in the first
friends.unshift("Aniket");
console.log(friends);

// remove element from last
friends.pop();
const popped =friends.pop();
console.log(popped);
console.log(friends);

// remove element from first
friends.shift();
console.log(friends);

//  to find the index of an element
console.log(friends.indexOf('Raj'));
console.log(friends.indexOf("Bob")); //this will print -1 because its not present in array
console.log(friends.indexOf("popss"));//this will also print -1 because its not present in array

// to check something is present in array or not

console.log(friends.includes("Raj"));// this will give true because its present in array
console.log(friends.includes("Puru")); // this will give false because its not present in array

