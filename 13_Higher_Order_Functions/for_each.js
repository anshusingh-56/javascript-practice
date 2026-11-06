// forEach() -> Executes a callback function for each array element.

const numbers = [10,20,30,40,50];

// forEach() -> Executes a callback function for each array element.
numbers.forEach(function (number) {
    console.log(number);
});

console.log("Using Arrow function:");

// Arrow Function (=>) -> Shorter syntax for writing functions.
numbers.forEach(number => {
    console.log(number * 2);
});