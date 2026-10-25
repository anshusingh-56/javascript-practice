// Using the continue statement
// The continue statement skips the current iteration and proceeds to the next iteration of the loop.

// 1. Skip the number 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

console.log("---------------");

// 2. Print only odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}