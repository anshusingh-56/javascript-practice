// Date Basics

const currentDate = new Date();

console.log("Current Date: ", currentDate);

console.log("Year:", currentDate.getFullYear());
console.log("Month: ", currentDate.getMonth() + 1);
console.log("Date: ", currentDate.getDate());
console.log("Day: ", currentDate.getDay());

const customDate = new Date ("2026-09-10");

console.log("Custom Date: ", customDate.toDateString());
console.log("Timestamp: ", currentDate.getTime());