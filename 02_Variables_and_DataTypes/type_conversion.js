// Type conversion in JavaScript

// 1. String to Number
let number = Number("100");
console.log(number);
console.log(typeof number);

// 2. Number to String
let text = String(250);
console.log(text);
console.log(typeof text);

// 3. String to Boolean
let status = Boolean("Hello");
console.log(status);

// 4. Number to Boolean
console.log(Boolean(1));
console.log(Boolean(0));

// 5. Invalid numeric conversion
let result = Number("Hello");
console.log(result);
console.log(typeof result);