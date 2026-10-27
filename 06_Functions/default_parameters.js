// Default Parameters
// Default Parameters: Provide default values for function parameters when no argument is passed

function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet("Anshu");
greet();
greet("Rahul");

function calculatePrice(price, tax = 5) {
    return price + (price * tax / 100);
}

console.log("Final Price:", calculatePrice(100));
console.log("Final Price:", calculatePrice(100, 18));