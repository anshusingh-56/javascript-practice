// Nullish Coalescing Operator
// Nullish Coalescing Operator (??) -> Provides a default value only when the left-side value is null or undefined.

const username = null;

// If username is null or undefined, "Guest" will be used.
const displayName = username ?? "Guest";

console.log("Display Name:", displayName);

// Undefined example
const email = undefined;

// If email is undefined, the default message will be returned.
console.log("Email:", email ?? "Email not provided");

// Difference between || and ??
const age = 0;

// OR (||) treats 0 as a falsy value, so 18 is returned.
console.log("Using OR:", age || 18);

// Nullish (??) only checks for null or undefined, so 0 is returned.
console.log("Using Nullish:", age ?? 18);

const score = 100;

// Since score is neither null nor undefined, its original value is returned.
console.log("Score:", score ?? 0);
