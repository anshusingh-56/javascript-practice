const input = document.getElementById("name");
const result = document.getElementById("result");

input.addEventListener("input", function () {
    if(input.value.trim() === "") {
        result.textContent = "Your name will appear here";
    }
    else {
        result.textContent = "Hello " + input.value;
    }
});
