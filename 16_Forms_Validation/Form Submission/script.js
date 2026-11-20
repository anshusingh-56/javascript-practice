
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    result.textContent = "Thank you, " + name +
        "! Your form was submitted successfully.";

    console.log("Name:", name);
    console.log("Email:", email);

    form.reset();
});
