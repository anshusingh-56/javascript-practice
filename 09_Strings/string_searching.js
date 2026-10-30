// Searching Inside Strings

const sentence = "JavaScript is fun, and JavaScript is powerful.";

// indexOf() returns the first occurrence index or -1 if not found
console.log("Index of fun:", sentence.indexOf("fun"));
console.log("Last index of JavaScript:", sentence.lastIndexOf("JavaScript"));
console.log("Index of Python:", sentence.indexOf("Python"));

console.log("Search for powerful:", sentence.search(/powerful/));

// at() returns the character at the specified index and supports negative indexes
console.log("Character at index 0:", sentence.at(0));

// at(-1) returns the last character of the string
console.log("Character at index -1:", sentence.at(-1));