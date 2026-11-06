// Optional Chaining
// Optional Chaining (?.) -> Safely accesses a property and returns undefined if it does not exist.

const student = {
    name: "Anshu",
    address: {
        city: "Indore"
    }
};

console.log("Name:", student.name);
console.log("City:", student.address?.city);

// Accessing a missing nested property
console.log("Country:", student.address?.country);

// Accessing a property from an undefined object
const user = undefined;

console.log("User Email:", user?.email);

// Optional chaining with arrays
const users = [];

console.log("First User:", users[0]?.name);