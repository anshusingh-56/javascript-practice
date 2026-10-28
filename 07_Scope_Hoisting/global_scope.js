// Global scope
// A global variable can be accessed from different parts of the same script, subject to scope rules.
// Variables declared outside functions and blocks may be globally accessible within their script or module context.

let name = "Anshu Singh";

function greet() {
    console.log("Hello,", name);
}

function showMessage() {
    console.log("Welcome to JavaScript");
}

greet();
showMessage();

console.log("Username:", name);
