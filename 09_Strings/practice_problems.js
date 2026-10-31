// String Practice Problems

// 1. Reverse a string
const word = "Hello";
const reverse = word.split("").reverse().join("");

console.log("Revrsed: ", reverse);

// 2. Count characters
const message = "JavaScript";
console.log("Character count: ", message.length);

// 3. Convert a name to uppercase
const name = "anshu";

console.log("Name: ", name.toUpperCase());

// 4. Check whether a word exists
const sentence = "I am learning JavaScript";

console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// 5. Count the number of words
const text = "JavaScript is fun to learn";
const words = text.trim().split(/\s+/);

console.log("Word count:", words.length);

// 6. Remove extra spaces at the ends
const input = "   Hello Anshu   ";

console.log("Clean text:", input.trim());