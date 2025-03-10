// Exercise. 
// Add a command to the class that allows you to find the largest value from the added elements
// Adder interface still defines the add and getSum methods
interface Adder {
    add(nr: number): void;
    getSum(): number;
 }
 
 // CharCounter class that uses an Adder to count characters in words
 class CharCounter {
     constructor(protected adder: Adder) {}
 
     addWordCharacters(word: string): void {
         this.adder.add(word.length); // Adds the word length to the adder
     }
 
     getCharacterCount() {
         return this.adder.getSum(); // Returns the total character count
     }
 }
 
 // CountingAdder class implements Adder interface and adds extra features
 class CountingAdder implements Adder {
     protected sum: number = 0;  // Sum of all added numbers
     protected count: number = 0; // Number of added elements
     protected max: number = 0;   // Store the maximum value added
 
     add(nr: number) {
         this.sum += nr;
         this.count++;
         if (nr > this.max) {
             this.max = nr;  // Update the max if the new number is larger
         }
     }
 
     getSum(): number {
         return this.sum;  // Returns the sum of all added numbers
     }
 
     // Method to calculate the average of added numbers
     getAverage() {
         if (this.count > 0) {
             return this.sum / this.count;
         }
         return 0;
     }
 
     // New method to get the maximum value added
     getMaxValue(): number {
         return this.max;  // Returns the maximum value added so far
     }
 }
 
 // Main code: create the CountingAdder and CharCounter instances
 let adder1: CountingAdder = new CountingAdder();
 let counter1: CharCounter = new CharCounter(adder1);
 
 counter1.addWordCharacters("Juku");
 counter1.addWordCharacters("tuli");
 counter1.addWordCharacters("kooli");
 counter1.addWordCharacters("autoooo");
 
 console.log(counter1.getCharacterCount());  // Outputs the total character count: 14
 console.log(adder1.getAverage());           // Outputs the average: 4.666...
 console.log(adder1.getMaxValue());          // Outputs the maximum value added: 5
 