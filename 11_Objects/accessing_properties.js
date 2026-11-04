// Accessing Object Properties

const student = {
    name: "Anshu",
    age: 19,
    city: "Indore"
}

// Dot notation
console.log("Name:", student.name);

// Bracket notation
console.log("Age:", student["age"]);

// Accessing a property using a variable
const propertyName = "city";
console.log("City:", student[propertyName]);

// Accessing a missing property
console.log("Email:", student.email);