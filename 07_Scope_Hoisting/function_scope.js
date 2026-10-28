// Function scope
// Variables declared with let and const inside a function are accessible within that function and its nested scopes.
// They cannot be accessed outside the function in which they are declared.
// Trying to access an out-of-scope variable causes a ReferenceError.

function showNumber() {
    let number = 25;
    console.log("Inside Number: ", number);
}

showNumber();

// This would cause a ReferenceError because number
// is not accessible outside the function.

// console.log(number);