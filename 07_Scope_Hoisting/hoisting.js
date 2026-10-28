// Hoisting Examples
// Hoisting refers to how JavaScript processes declarations before executing the code.
// Function declarations can generally be called before their definitions within the same scope.
// A var declaration is initialized with undefined until its assignment executes.
// let and const cannot be accessed before initialization because they are in the Temporal Dead Zone (TDZ).
// Declaring a variable and assigning a value to it are separate operations.


// 1. Function declarations can be called before their definition.
sayHello();

function sayHello() {
    console.log("Hello from a function!");
}

// 2. A var declaration is hoisted and initialized with undefined.
console.log("Age besfore assignment: ", age);

var age = 18;

console.log("Age after assignment: ", age);


// 3. let and const cannot be accessed before initialization.
// Uncommenting the next line causes a ReferenceError.

// console.log(score);

let score = 90;

console.log("Score:", score);