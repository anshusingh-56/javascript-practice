// Rest Parameters
// Rest Parameter (...) -> Collects multiple values into a single array.

function calculateSum(...numbers) {
    let sum = 0;

    for (const number of numbers) {
        sum += number;
    }
    return sum;
}

console.log("Sum =", calculateSum(10, 20));
console.log("Sum =", calculateSum(10, 20, 30));
console.log("Sum =", calculateSum(10, 20, 30, 40, 50));

// Rest parameter with normal parameters
function introduce(name, ...hobbies) {
    console.log("Name: ", name);
    console.log("Hobbies: ", hobbies);
}

introduce("Anshu", "Music", "Coding", "Games");