// Basic Array Methods
// toString() converts array elements into a comma-separated string.
// join() combines array elements into a string using a specified separator.
// includes() checks whether an array contains a value.
// indexOf() returns the index of the first matching element or -1 if not found.
// These methods do not modify the original array in this example.

const numbers = [10, 20, 30, 40, 50];

console.log("Oringinal Numbers: ", numbers);

console.log("Strings: ", numbers.toString());
console.log("Joined: ", numbers.join("-"));

console.log("Include 20: ", numbers.includes(20));
console.log("Index of 30: ", numbers.indexOf(30));

console.log("Original after methods: ", numbers);