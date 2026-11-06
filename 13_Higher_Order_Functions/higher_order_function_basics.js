// Callback Function Example

function calculate(a, b, operation) {

    // Execute the callback function with a and b.
    return operation(a, b);
}

// Returns the sum of two numbers.
function add(x, y) {
    return x + y;
}

// Returns the product of two numbers.
function multiply(x, y) {
    return x * y;
}

// Pass add() as a callback function.
console.log("Addition: ", calculate(10, 5, add));

// Pass multiply() as a callback function.
console.log("Multiplication:", calculate(10, 5, multiply));