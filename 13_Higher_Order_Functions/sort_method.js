const fruits = ["Mango", "Apple", "Banana", "Orange"];

// sort() -> Sorts array elements alphabetically.
fruits.sort();

console.log("Sorted Fruits:", fruits);

const numbers = [40, 10, 100, 25, 5];

// Sort numbers in ascending order (small to large).
numbers.sort((a, b) => a - b);

console.log("Ascending Order:", numbers);

// Sort numbers in descending order (large to small).
numbers.sort((a, b) => b - a);

console.log("Descending Order:", numbers);