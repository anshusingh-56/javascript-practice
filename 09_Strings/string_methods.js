// Common String Methods

const message = "Learn JavaScript";

// startsWith() checks whether a string begins with a specified text
console.log("Starts with Learn:", message.startsWith("Learn"));

// endsWith() checks whether a string ends with a specified text
console.log("Ends with Script:", message.endsWith("Script"));

// includes() checks whether a string contains specified text
console.log("Includes Java:", message.includes("Java"));

console.log("Slice:", message.slice(6, 16)); // Takes characters from index 6 to 15 (16 is not included)

// slice() extracts characters from the start index (included) to the end index (not included)
console.log("Replace:", message.replace("JavaScript", "Python"));


const sentence = "HTML,CSS,JavaScript";

// split() converts a string into an array using a separator
console.log("Split:", sentence.split(","));

const word = "Hello";

// repeat() repeats a string a specified number of times
console.log("Repeat:", word.repeat(3));