// Function Practice Problems

// 1. Check whether a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log("10 is:", checkEvenOdd(10));
console.log("7 is:", checkEvenOdd(7));

// 2. Find the largest of two numbers
function findLargest(a, b) {
    if (a > b) {
        return a;
    }

    return b;
}

console.log("Largest:", findLargest(15, 25));

// 3. Calculate the square of a number
function square(number) {
    return number * number;
}

console.log("Square:", square(6));

// 4. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("Temperature:", celsiusToFahrenheit(25));