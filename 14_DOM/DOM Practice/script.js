const heading = document.getElementById("heading");
const message = document.getElementById("message");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {

    heading.textContent = "DOM Manipulation";
    message.textContent = "Heading changed successfully!";
    heading.style.color = "green";
    button.textContent = "clicked";
    button.style.backgroundColor = "pink";
    document.body.style.backgroundColor = "lightblue";
    console.log(button);
});
