// Select element by ID
const heading = document.getElementById("heading");
console.log(heading);

// Select element by Class
const info = document.getElementsByClassName("info");
console.log(info);

// Select elements by tag name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Select using CSS selector
const firstInfo = document.querySelector(".info");
console.log(firstInfo);

// Select all matching elements
const allInfo = document.querySelectorAll(".info");
console.log(allInfo);