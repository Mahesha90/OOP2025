"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This is a EXTRA EXAMPLE related to first example which allows user to input answwers
// Importing the readline module to allow user input from the terminal
var readline = require("readline");
// Implementing the interface in a class "SimpleAdder"
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; // A protected variable to store the sum
    }
    // Method to add a number to the sum
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    // Method to return the current sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    // Method to reset the sum to 0
    SimpleAdder.prototype.reset = function () {
        this.sum = 0;
    };
    return SimpleAdder;
}());
// Create an instance of SimpleAdder, but using the Adder interface
var adder1 = new SimpleAdder();
// Create a readline interface to allow user input from the terminal
var rl = readline.createInterface({
    input: process.stdin, // Read from the standard input (keyboard)
    output: process.stdout // Output to the terminal
});
// Function to continuously ask the user for input
function askUser() {
    rl.question("Enter a number to add (or type 'reset' to reset, 'exit' to quit): ", function (input) {
        if (input.toLowerCase() === "reset") {
            // If user types 'reset', reset the sum to 0
            adder1.reset();
            console.log("Sum has been reset to 0.");
        }
        else if (input.toLowerCase() === "exit") {
            // If user types 'exit', display final sum and exit program
            console.log("Final sum:", adder1.getSum());
            rl.close(); // Close the readline interface
            return;
        }
        else {
            // Try to convert input to a number
            var number = parseFloat(input);
            if (!isNaN(number)) {
                // If it's a valid number, add it to the sum
                adder1.add(number);
                console.log("Current sum:", adder1.getSum());
            }
            else {
                // If input is not a number, show an error message
                console.log("Invalid input. Please enter a number.");
            }
        }
        askUser(); // Call function again to allow continuous input
    });
}
// Start the interactive loop by calling the function
askUser();
