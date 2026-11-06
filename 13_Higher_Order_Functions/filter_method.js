// filter() -> Creates a new array containing only the elements that satisfy a condition.

const numbers = [10,15,20,25,30,35,40,50];

const evenNumber = numbers.filter(number => {
    return number % 2 === 0;
});

const greaterThanTwenty = numbers.filter(number => {
    return number > 20;
});

console.log("Even number:", evenNumber);
console.log("Greater than 20:", greaterThanTwenty);