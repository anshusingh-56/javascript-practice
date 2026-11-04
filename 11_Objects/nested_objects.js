// Nested Objects

const student = {
    name: "Anshu",
    age: 20,

    address: {
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India"
    },

    marks: {
        maths: 85,
        physics: 78,
        chemistry: 82
    }
};

console.log("Name:", student.name);
console.log("City:", student.address.city);
console.log("State:", student.address.state);
console.log("Maths Marks:", student.marks.maths);
console.log("Physics Marks:", student.marks.physics);