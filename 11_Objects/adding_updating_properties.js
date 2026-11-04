// Adding, Updating and Deleting Object Properties

const student = {
    name: "Anshu",
    age: 19
}

// Adding new properties
student.city = "Indore";
student.course = "B.Tech CSE";

console.log("After adding: ", student);

// Updating a property
student.age = 20;

console.log("After updating: ", student);

// Deleting a property
delete student.city;

console.log("After deleting:", student)