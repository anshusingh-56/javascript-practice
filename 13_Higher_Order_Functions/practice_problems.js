// 1. Use forEach() to print all array elements.

const numbers = [10, 25, 50, 65, 80, 100];

numbers.forEach(function(number) {
    console.log(number);
});

// 2. Use map() to calculate the cube of each number.

const cube = numbers.map(function (number) {
    return number * number * number;
});

console.log("Cube:", cube);

// 3. Use filter() to find numbers greater than 50.

const greaterThanFifty = numbers.filter(function (number) {
    return number > 50;
});

console.log("Greater than fifty:", greaterThanFifty);

// 4. Use reduce() to calculate the total marks.

const totalMarks = numbers.reduce((total, number) => {
    return total + number;
}, 0);

console.log("Total marks =", totalMarks);
