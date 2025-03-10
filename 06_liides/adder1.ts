// This is a extra example related to first example which allows user to input answwers
// Importing the readline module to allow user input from the terminal
import * as readline from 'readline';

// Define an interface called "Adder" which specifies what an Adder must have
interface Adder {
    add(nr: number): void;  // Method to add a number
    getSum(): number;       // Method to return the current sum
    reset(): void;          // Method to reset the sum to 0
}

// Implementing the interface in a class "SimpleAdder"
class SimpleAdder implements Adder {
    protected sum: number = 0;  // A protected variable to store the sum

    // Method to add a number to the sum
    add(nr: number) {
        this.sum += nr;
    }

    // Method to return the current sum
    getSum(): number {
        return this.sum;
    }

    // Method to reset the sum to 0
    reset() {
        this.sum = 0;
    }
}

// Create an instance of SimpleAdder, but using the Adder interface
let adder1: Adder = new SimpleAdder();

// Create a readline interface to allow user input from the terminal
const rl = readline.createInterface({
    input: process.stdin,  // Read from the standard input (keyboard)
    output: process.stdout // Output to the terminal
});

// Function to continuously ask the user for input
function askUser() {
    rl.question("Enter a number to add (or type 'reset' to reset, 'exit' to quit): ", (input) => {
        if (input.toLowerCase() === "reset") {
            // If user types 'reset', reset the sum to 0
            adder1.reset();
            console.log("Sum has been reset to 0.");
        } else if (input.toLowerCase() === "exit") {
            // If user types 'exit', display final sum and exit program
            console.log("Final sum:", adder1.getSum());
            rl.close();  // Close the readline interface
            return;
        } else {
            // Try to convert input to a number
            let number = parseFloat(input);
            if (!isNaN(number)) {
                // If it's a valid number, add it to the sum
                adder1.add(number);
                console.log("Current sum:", adder1.getSum());
            } else {
                // If input is not a number, show an error message
                console.log("Invalid input. Please enter a number.");
            }
        }
        askUser(); // Call function again to allow continuous input
    });
}

// Start the interactive loop by calling the function
askUser();
