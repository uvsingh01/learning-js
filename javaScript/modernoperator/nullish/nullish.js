const restro={
    pair:"bread",
}
restro.guest =0;
const guests= restro.guest||10;
// what if we had zero customers at sunday and if we want the no. of guest then it should return 0 but in or operator case 0 is a falsy value so this guest1 will return 10
// we can fix this error via nullish operator
console.log(guests);

// nullish coalescing operator only consist of (null and undefined)
const guestsCorrect= restro.guest??10;
console.log((guestsCorrect));
// this is an ES2020 feature