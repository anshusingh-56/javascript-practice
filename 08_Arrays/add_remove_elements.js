// Adding and Removing Array Elements

// push() adds an element to the end of an array.
// pop() removes the last element.
// unshift() adds an element to the beginning.
// shift() removes the first element.
// These methods modify the original array.

const fruits = ["Apple", "Mango", "Orange"]

fruits.push("Banana");
console.log("After push: ", fruits);

fruits.pop();
console.log("After pop: ", fruits);

fruits.unshift("Papaya");
console.log("After unshift: ", fruits);

fruits.shift();
console.log("After shift: ", fruits);