// Array Practice Problems

// Array elements can be processed using loops.
// The filter() method can select elements that satisfy a condition.
// The spread syntax ... creates a shallow copy of an array when used inside an array literal.
// reverse() modifies the array on which it is called.
// Copying an array before calling reverse() preserves the original array.

// 1. Calculate the sum of array elements
const numbers = [10, 20, 30, 40];

let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log("Sum = ", sum);


console.log("------------------------");

// 2. Find the largest number
const values = [12, 45, 7, 89, 23];

let largest = 0;

for (const value of values) {
    if(value > largest) {
        largest = value;
    }
}

console.log("Largest = ", largest);

console.log("------------------------");

// 3. Count even numbers
const nums = [1, 2, 3, 4, 5, 6];

const evenCount = nums.filter(number => number % 2 === 0).length;

console.log("Even number: ", evenCount);

console.log("------------------------");


// 4. Reverse an array without modifying the original
const original = [1, 2, 3, 4, 5];

const reverse = [...original].reverse();

console.log("Original: ", original);
console.log("Reverse: ", reverse);

console.log("------------------------");

// 5. Create an array of squares
const squareNumbers = [2, 3, 4, 5].map(number => number * number);

console.log("Squares:", squareNumbers);