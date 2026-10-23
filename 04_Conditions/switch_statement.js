// Using the switch statement 

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

        case 2:
        console.log("Tuesday");
        break;

        case 3:
        console.log("Wednesday");
        break;

        case 4:
        console.log("Thusday");
        break;

        case 5:
        console.log("Friday");
        break;

        case 6:
        console.log("Saturday");
        break;

        case 7:
        console.log("Sunday");
        break;

        default:
            console.log("Invalid day");
}

// Simple calculator using switch

let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
    case '+':
        console.log("Result = ", a + b);
        break;

    case '-':
        console.log("Result = ", a - b);
        break;

    case '*':
        console.log("Result = ", a * b);
        break;
    
    case '/':
        console.log("Result = ", a / b);
        break;
    
    default:
        console.log("Invaild operator");
}