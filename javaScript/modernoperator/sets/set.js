// sets
//⭕this is an es6 feature
//⭕in this data structure there are unique value
//⭕sets are also iterables
//⭕set will return an object
const orderedSet = new Set(["Yuvi","Raju","Rauni","Raju","Rauni","Puru"] ); 
console.log(orderedSet);//we can see that duplicates are removed

//🔺 to knwow the length of set 
console.log(orderedSet.size);//will return length

//🔺 to know the set contains an element or not
console.log(orderedSet.has("Raju"));//will return true
console.log(orderedSet.has("pagal"));//will return false

//🔺 to add an element to a set
orderedSet.add("Anki");
orderedSet.add("Munna");
console.log(orderedSet);

//🔺 to delete an element from set
orderedSet.delete("Yuvi");
// console.log(orderedSet.delete("Yuvi"));
console.log(orderedSet);

// 🔺