//Using the interface 
// Class that uses an Adder to count the total number of characters in words
var CharCounter = /** @class */ (function () {
    //Constructor that takes and Adder object as a parameter and stores it in a protected variable
    function CharCounter(adder) {
        this.adder = adder;
    }
    // Adds the number of characters in a given word to the Adder
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length); // word.length gives the number of characters in the word and add it to the toal
    };
    // Retrieves the total character count stored in the Adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); // Calls getSum () from the Adder to get the total count
    };
    return CharCounter;
}());
// A simple implementation of Adder that keeps track of a total sum
var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; // Stores the accumulated total
    }
    // Adds a given number to the sum
    SimpleAdder.prototype.add = function (nr) {
        this.sum += nr;
    };
    // Returns the current total sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
// Create an instance of SimpleAdder to handle counting
var adder1 = new SimpleAdder();
// Create a CharCounter instance that uses adder1 to track character counts
var counter1 = new CharCounter(adder1);
// Add words to count their characters
counter1.addWordCharacters("Juku"); // "Juku" has 4 characters → adds 4
counter1.addWordCharacters("tuli"); // "tuli" has 4 characters → adds 4
counter1.addWordCharacters("kooli"); // "kooli" has 5 characters → adds 5
// Output the total character count (should be 4 + 4 + 5 = 13)
console.log(counter1.getCharacterCount()); // Output: 13
//The constructor in CharCounter ensures that the class can work with any object that follows the Adder interface. 
// It gives the CharCounter class flexibility by allowing it to delegate the task of adding numbers and calculating the sum to the Adder object. 
