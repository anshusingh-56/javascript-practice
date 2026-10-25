// Nested loops in JavaScript

// 1. Print a 3 x 3 number pattern
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i = ", i, "j = ", j);
    }
    console.log("-------------------------");

}

console.log("-------------------------");

// 2. Print a star pattern
for (let i = 1; i <= 5; i++) {
    let row = "";
    
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("-------------------------");
console.log("-------------------------");

// 3. Print a multiplication table grid
for (let i = 1; i <= 5; i++) {
    let row = "";
    
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}