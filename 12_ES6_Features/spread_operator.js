// Spread Operator
// Spread Operator (...) -> Expands the elements of an array or the properties of an object.

// Copying an array
const numbers = [10, 20, 30];
const copiedNumbers = [...numbers];

console.log("Copied Numbers = ", copiedNumbers);
console.log("Copied Numbers = ", copiedNumbers);

// Combining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log("Combined array = ", combinedArray);

// Adding elements
const updatedNumbers = [0, ...numbers, 40];

console.log("Updated number = ", updatedNumbers);

// Copying and updating objects
const student = {
    name: "Anshu",
    age: 19
}

const updatedStudent = {
    ...student,
    age: 20,
    city: "Indore"
}

console.log("Updated Student =", updatedStudent);
