// Array Destructuring
const colors = ["Red","Green","Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Skipping array elements
const numbers = [20,25,30,35,40]

const [a, , c] = numbers

console.log("A:", a);
console.log("B:", c);

// Object Destructuring
const student = {
    name: "Anshu",
    age: 19,
    city: "Indore"
}

const {name, age, city} = student;

console.log(name);
console.log(age);
console.log(city);

// Renaming variables
const {name: studentName} = student;
console.log("Student Name: ", studentName);