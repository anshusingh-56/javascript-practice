const button = document.getElementById("btn")

button.addEventListener("click", function (event) {
    console.log("Event type:", event.type);
    console.log("Target elenent:", event.target);
    console.log("Mouse X:", event.clientX);
    console.log("Mouse Y:", event.clientY);
});