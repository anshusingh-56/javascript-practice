// Accessing String Characters

const language = "JavaScript";

console.log("First Character = ", language[0]);
console.log("Second Character = ", language[1]);
console.log("Last Character = ", language[language.length - 1]);

console.log("Character at index 4: ", language.charAt(4));

// Strings are immutable.
// This assignment does not change the original string.
language[0] = "Y";

console.log("Original string:", language);