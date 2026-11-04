// Number Conversion

const textNumber = "100";
const decimalText = "25.56";

const convertedNumber = Number(textNumber);
const convertedFloat = parseFloat(decimalText);

console.log("Converted Number: ", convertedNumber);
console.log("Converted Decimal: ", convertedFloat);

console.log("Number to string: ", String(500));
console.log("Boolean to Number: ", Number(true));
console.log("Invalid Conversion: ", Number("Hello"));

console.log("Binary: ", (10).toString(2));
console.log("Hexadecimal: ", (255).toString(16));