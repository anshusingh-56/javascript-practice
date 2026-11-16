
const form = document.getElementById("myForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (username.value.trim() === "") {
        message.textContent = "Name is required!";
        message.style.color = "red";
    } else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
    }
});
