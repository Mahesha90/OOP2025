//Using the interface excerisce. Create another method for the CharCounter class that accepts an array of words. The sum is added to the length of all the words in the array.
// Define an interface Adder that specifies two methods: add and getSum.
interface Adder {
    add(nr: number): void;  // A method to add a number
    getSum(): number;       // A method to retrieve the total sum
 }
 
 // Class that uses an Adder to count the total number of characters in words
 class CharCounter {
     constructor(protected adder: Adder) { }  // Takes an Adder object as input
 
     // Adds the number of characters in a given word to the Adder
     addWordCharacters(word: string): void {
         this.adder.add(word.length);  // word.length gives the number of characters
     }
 
     // Retrieves the total character count stored in the Adder
     getCharacterCount(): number {
         return this.adder.getSum();
     }
 
     // New method that adds the character counts of multiple words from an array
     addMultipleWordsCharacters(words: string[]): void {
         // Iterate over each word in the array and add its length to the sum
         for (let word of words) { // loop that iterates over each element (word) in the words array
             this.adder.add(word.length);  // Add the length of each word
         }
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
 
 // Add individual words to count their characters
 counter1.addWordCharacters("Juku");   // "Juku" has 4 characters → adds 4
 counter1.addWordCharacters("tuli");   // "tuli" has 4 characters → adds 4
 counter1.addWordCharacters("kooli");  // "kooli" has 5 characters → adds 5
 
 // Add an array of words to count their characters
 counter1.addMultipleWordsCharacters(["auto", "linn", "puu"]); // "auto" + "linn" + "puu" = 4 + 4 + 3 = 11
 
 // Output the total character count (previous total was 13, now add 11)
 console.log(counter1.getCharacterCount()); // Output: 24
 