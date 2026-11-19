const form = document.getElementById("termsForm");
const terms = document.getElementById("terms");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (terms.checked) {
        message.textContent = "Thank you for accepting";
        message.style.color = "green"
    }
    else {
        message.textContent = "Please accept the terms first";
        message.style.color = "red";
    }
});