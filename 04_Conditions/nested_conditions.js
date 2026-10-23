// Nasted if statemnent

let age = 20;
let hasId =  true;

if(age >= 18){
    console.log("Age requirement satisfied.");

    if(hasId){
    console.log("You can enter.");
    }
    else {
    console.log("Please show your ID.");
    }
}
else {
    console.log("You are too young to enter.")
}

// Student eligibility

let marks = 75;
let attendance = 85;

if(marks >= 40){
    if(attendance >= 75) {
        console.log("Student is eligible.");
    }
    else {
        console.log("Attendance is insufficient.");
    }
}
else {
    console.log("Student has failed.");
}