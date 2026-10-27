// Arrow Function

// Arrow Function: Modern and concise way to create functions
const greet = () => {
    console.log("Hello from an arrow function");
}

// Arrow function with explicit return
const add = (a, b) => {
    return a + b;
}

// Arrow function with implicit return
// Implicit return: returns the result automatically without using the return keyword
const square = number => number * number;

greet();

console.log("Sum = ", add(10, 30));
console.log("Square = ", square(5));