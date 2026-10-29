// Looping Through Arrays

// A for loop accesses array elements using their indexes.
// A for...of loop iterates over the values of an array.
// forEach() executes a callback function for each array element.

const fruits = ["Apple", "Banana", "Mango"];

// Using a for loop
console.log("Using for loop:");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("------------------------")

// Using for...of
console.log("Using for...of:");

for (const fruit of fruits) {
    console.log(fruit);
}

console.log("------------------------")

// Using forEach()
console.log("Using forEach:");

fruits.forEach(function(fruit) {
    console.log(fruit);
});
