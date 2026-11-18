const form = document.getElementById("passwordForm");
const password = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if(password.value.length >= 8) {
        message.textContent = "Strong Enough Password";
        message.style.color = "green";
    }
    else {
        message.textContent = "Password must have 8 characters";
        message.style.color = "red";
    }
});