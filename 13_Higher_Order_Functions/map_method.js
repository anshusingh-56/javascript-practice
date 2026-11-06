const numbers = [1,2,3,4,5];

// map() -> Creates a new array by applying a function to each element of the original array.
const squares = numbers.map(number => {
    return number * number;
});

console.log("Original Array:", numbers);
console.log("Squares:", squares);