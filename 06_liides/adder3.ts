//Using the interface 


// Define an interface Adder that specifies two methods: add and getSum.
interface Adder {
    add(nr: number): void;  // A method to add a number
    getSum(): number;       // A method to retrieve the total sum
 }
 
 // Class that uses an Adder to count the total number of characters in words
 class CharCounter {
    //Constructor that takes and Adder object as a parameter and stores it in a protected variable
     constructor(protected adder: Adder) { }  
     // Adds the number of characters in a given word to the Adder
     addWordCharacters(word: string): void { // method which designed to take a word (a string) and perform some operation
         this.adder.add(word.length);  // word.length gives the number of characters in the word and add it to the toal
     }
 
     // Retrieves the total character count stored in the Adder
     getCharacterCount(): number {
         return this.adder.getSum();// Calls getSum () from the Adder to get the total count
     }
 }
 
 // A simple implementation of Adder that keeps track of a total sum
 class SimpleAdder implements Adder {
     protected sum: number = 0;  // Stores the accumulated total
     // Adds a given number to the sum
     add(nr: number): void {
         this.sum += nr;
     }
     // Returns the current total sum
     getSum(): number {
         return this.sum;
     }
 }
 
 // Create an instance of SimpleAdder to handle counting
 let adder1: Adder = new SimpleAdder();
 // Create a CharCounter instance that uses adder1 to track character counts
 let counter1: CharCounter = new CharCounter(adder1);
 // Add words to count their characters
 counter1.addWordCharacters("Juku");   // "Juku" has 4 characters → adds 4
 counter1.addWordCharacters("tuli");   // "tuli" has 4 characters → adds 4
 counter1.addWordCharacters("kooli");  // "kooli" has 5 characters → adds 5
 
 // Output the total character count (should be 4 + 4 + 5 = 13)
 console.log(counter1.getCharacterCount()); // Output: 13



 //The constructor in CharCounter ensures that the class can work with any object that follows the Adder interface. 
 // It gives the CharCounter class flexibility by allowing it to delegate the task of adding numbers and calculating the sum to the Adder object. 