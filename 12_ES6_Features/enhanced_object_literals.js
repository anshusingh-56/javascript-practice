// Enhanced Object Literals
// Enhanced Object Literals -> Provides a shorter and cleaner syntax for creating objects.

const name = "Anshu";
const age = 20;

// Property shorthand -> Uses variable names directly as object properties.
const student = {
    name,
    age,

    // Method shorthand -> Defines object methods without the function keyword.
    introduce() {
        // this refers to the current object.
        console.log(`My name is ${this.name}.`);
    }
};

// Calling the object method.
student.introduce();

console.log("Student:", student);

// Computed property names -> Uses a variable or expression as the property name.
const propertyName = "city";

const details = {
    [propertyName]: "Indore"
    // Same as: city: "Indore"
};

// Accessing the dynamically created property.
console.log("City:", details.city);