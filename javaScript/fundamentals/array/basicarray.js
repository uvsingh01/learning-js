const friends = ["Yuvraj", "Raj", "Paras"];

// add the element in the last
friends.push("Aman");
const newLength = friends.push(); // this will return the no. of elements in a string
console.log(friends);
console.log(newLength);

// add element in the first
friends.unshift("Aniket");
console.log(friends);

// 