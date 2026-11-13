const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "orange";
    box.textContent = "Mouse Entered";
});

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "lightblue";
    box.textContent = "Hover Over Me";
});

box.addEventListener("mousedown", function () {
    console.log("Mouse Button Pressed");
});

box.addEventListener("mouseup", function () {
    console.log("Mouse Button Released");
});