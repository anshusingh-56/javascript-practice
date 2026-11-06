// Callback Function -> A function passed as an argument to another function and executed later. 

function greet(name, callback) {
    console.log("Hello " + name);

    // Execute the callback function.
    callback();
}

function sayWelcome() {
    console.log("Welcome to JavaScript");
}

// Call greet() and pass sayWelcome as a callback function.
greet("Anshu", sayWelcome);
