// 1. Check wheather number is positive, negative or zero

let number = -5;

if(number > 0) {
    console.log("Postive nunmber");
}
else if(number < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}

// 2. Find the greater of two numbers

let a = 25;
let b = 10;

if(a > b) {
    console.log("Greater number", a);
}
else if(b > a) {
    console.log("Greater number", b)
}
else {
    console.log("Equal numbers");
}

// 3. Check wheather a person eligible for a discount

let age = 26;

if(age >= 60) {
    console.log("Senior citizin discount available");
}
else {
    console.log("Regular prizing applies.");
}

// 4. Check wheather a year is a leap year

let year = 2026;

if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}

// 5. Calculate electricity bil using simple unit slaps

let units = 120;
let bill;

if(units <= 100) {
    bill = units * 3;
}
else if(units <= 200) {
    bill = 100 * 3 + (units - 100) * 5;
}
else {
    bill = 100 * 3 + 100 * 5 + (units - 200) * 7;
}

console.log("Elictricty bill: " + bill)