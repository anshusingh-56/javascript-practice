// Block function
// A block is a section of code enclosed in curly braces {}.
// Variables declared with let and const are block-scoped.
// A var variable is not restricted to the block in which it is declared.
// Prefer let and const for predictable scope behavior.

if (true) {
    let city = "Indore";
    const country = "India";

    console.log("City = ", city);
    console.log("Country = ", country);
}

// Variables declared with let and const
// inside this block cannot be accessed here.

// console.log(city);
// console.log(country);

// var does not follow block scope.
if (true) {
    var city = "Ghazipur";
}

console.log("City = ", city);