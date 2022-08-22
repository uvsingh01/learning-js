// maps
// in this ds we can store key value pair
//in maps key can have any type but in object we only have key as  a string

// ⭕ set method - use to add key value pair in map
const rest = new Map();
rest.set("name" , "kake di hatti");
rest.set("place","Delhi");
console.log(rest); 
const arr = [1,2];
rest
.set("friends", ["Raj","Paras","Raunak"])
.set("Contact No", 9999999999 )
.set(arr, [3,4]);//here we can see that key can be anything instead of string
console.log(rest);

// ⭕ get method- to get something out of map

console.log(rest.get("name"));
console.log(rest.get(arr));

// ⭕ has method - to find something in map
console.log(rest.has("name"));//this will return a boolean that is true in this case
console.log(rest.has("fuck"));// this will return false 

// ⭕delete method - to delete something from the map
rest.delete(arr);//this will delete the arr key with its value
console.log(rest);

// ⭕size - to know the size of the map
console.log(rest.size);

// ⭕ to clear everything from map
// rest.clear()

// ⭕ convert obj to map
const openingHours={
    mon:{
        open:2,
        closed:7,
    },
    tue:{
        open:9,
        closed:12,
    },
    wed:{
        open:0,
        closed:8,
    }
}
const objMap= new Map(Object.entries(openingHours));
console.log(objMap);

// ⭕ iteration on maps

for(const [key,value] of objMap){
    console.log(`this is the key-${key} and this is the value-${value}`);
}

// ⭕ convert map to array
console.log([...objMap]);

