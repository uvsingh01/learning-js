// create a date 
const date = new Date();
console.log(date);

console.log(new Date("Aug 29 2022 12:05:45"));
console.log(new Date("December 24,2022"));

// date methods

// to get the year
console.log(date.getFullYear());

// to get the month
console.log(date.getMonth());

// to get the date
console.log(date.getDate());

// to get day
console.log(date.getDay());

// to get time
console.log(date.getTime());
console.log(new Date(1661788994357));

// to get hours
console.log(date.getHours());

// to get minutes
console.log(date.getMinutes());

// to get seconds
console.log(date.getSeconds());

// to convert all thing into string
console.log(date.toISOString());

// to set anything
date.setFullYear(2030);//like this there are so many methods to set date ,day, hour, second, month etc 
console.log(date.getFullYear());

// to convert current date into milliseconds
console.log(Number(date));

// to convert time into day
console.log(Math.floor(Number(date)/(1000*60*60*24)));

// to format a date into an international format
console.log(new Intl.DateTimeFormat('en-GB').format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));
const options ={
    hour:"numeric",
    minute:"numeric",
    day:"numeric",
    month:"2-digit",
    year:"numeric",
    weekday:"long",
}
console.log(new Intl.DateTimeFormat('en-US', options).format(date));

// format a number into international currency units
const num =233124323;
console.log(new Intl.NumberFormat("en-US").format(num));
console.log(new Intl.NumberFormat("ar-SY").format(num));

const option = {
    style:"currency",
    currency:"USD",
}
console.log(new Intl.NumberFormat(option).format(num));

