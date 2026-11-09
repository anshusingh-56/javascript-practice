const numbers = [10, 20, 30, 40, 50];

// reduce() -> Reduces all array elements to a single value.
const sum = numbers.reduce((total, number) => {
    return total + number;

}, 0); // Initial value of total

console.log("Sum:", sum);