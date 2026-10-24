// Using of while loop.

// 1. Print numbers from 1 to 5
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("-------------------------")

// 2. Calculate the sum of numbers from 1 to 10
let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}
console.log("sum = ", sum);

console.log("-------------------------")

// 3. Reverse a number 25698
let number = 25698
let reverse = 0;
let remainder;

while (number > 0){
    remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
}

console.log("Reverse = ", reverse);