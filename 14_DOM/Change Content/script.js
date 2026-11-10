// Select HTML elements using their IDs

const heading = document.getElementById("heading");
const message = document.getElementById("message");
const box = document.getElementById("box");

// Change heading text
heading.textContent = "Welcome Anshu";

// Change paragraph text
message.innerText = "JavaScript is Amazing";

// Insert HTML inside the div
box.innerHTML = "<h2>Hello World!</h2>";
