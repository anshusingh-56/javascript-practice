// Object Methods

const student = {
    name: "Anshu",
    marks: 85,

    introduce: function () {
        console.log("My name is " + this.name);
    },

    showMarks() {
        console.log("My marks are " + this.marks);
    }
};

student.introduce();
student.showMarks();