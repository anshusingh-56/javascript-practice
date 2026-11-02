const prize = 123.456;

// toFixed() → Fixed decimal places
console.log("Fixed two decimal places:", prize.toFixed(2));

// toPrecision() → Set total number of digits
console.log("Precision:", prize.toPrecision(5));

// parseInt() → Convert string to integer
console.log("Parsed Integer:", parseInt("450.45"));

// parseFloat() → Convert string to decimal number
console.log("Parsed Float:", parseFloat("450.45"));

// Number.isNaN() → Check for NaN (Not a Number) value
console.log("Is NaN:", Number.isNaN(NaN));

// Number.isFinite() → Check if number is finite
console.log("Is Finite:", Number.isFinite(100));

// Infinity → Special value greater than any number
console.log("Is Infinite:", Number.isFinite(Infinity));
