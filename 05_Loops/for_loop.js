// Using for loop

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  Separator line for better output readability
console.log("-------------------------")

// 2. Print even numbers from 2 to 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("-------------------------")

// 3. Print a multiplication table of 5.
let number = 5;


for (let i = 1; i <= 10; i++) {

    // Template literals (${ }) are used to insert variables or expressions inside a string
    console.log(`${number} x ${i} = ${number * i}`);
}
