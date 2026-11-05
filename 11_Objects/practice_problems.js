// Object Practice Problems

// 1. Create a student object
const student = {
    name: "Anshu",
    age: 20,
    marks: 90
}

console.log("Student object: ", student);

// 2. Calculate total marks
const marks = {
    physics: 85,
    chemistry: 80,
    maths: 82
}

const totalMarks = marks.physics + marks.chemistry + marks.maths;

console.log("Toatal Marks:", totalMarks);

// 3. Calculate average marks
const avg = totalMarks / 3;

console.log("Average marks:", avg);

// 4. Add a new property
student.city = "Indore";

console.log("Student city: ", student.city);

// 5. Loop through object properties
for (const key in student) {
    console.log(key + ":", student[key])
}