const form = document.getElementById("emailForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email.value.trim())) {
        message.textContent = "Valid Email Address";
        message.style.color = "green";
    }
    else {
        message.textContent = "Enter a valid email";
        message.style.color = "red";
    }
});

