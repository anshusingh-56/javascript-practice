// Searching Arrays

// includes() checks whether a value exists in an array.
// indexOf() returns the first matching index.
// lastIndexOf() returns the last matching index.
// find() returns the first element that satisfies a condition.
// If find() does not find a matching element, it returns undefined.

const fruits = ["Apple", "Banana", "Mango", "Banana"];

console.log("Includes Mango:", fruits.includes("Mango"));
console.log("Index of Banana:", fruits.indexOf("Banana"));
console.log("Last index of Banana:", fruits.lastIndexOf("Banana"));
console.log("Index of Grapes:", fruits.indexOf("Grapes"));

const numbers = [5, 12, 18, 25];

const result = numbers.find(number => number > 15);

console.log("First number greater than 15:", result);