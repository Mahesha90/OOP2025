// Class that uses an Adder to count the total number of characters in words
var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    } // Takes an Adder object as input
    // Adds the number of characters in a given word to the Adder
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length); // word.length gives the number of characters
    };
    // Retrieves the total character count stored in the Adder
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    // New method that adds the character counts of multiple words from an array
    CharCounter.prototype.addMultipleWordsCharacters = function (words) {
        // Iterate over each word in the array and add its length to the sum
        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) { // loop that iterates over each element (word) in the words array
            var word = words_1[_i];
            this.adder.add(word.length); // Add the length of each word
        }
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
// Add individual words to count their characters
counter1.addWordCharacters("Juku"); // "Juku" has 4 characters → adds 4
counter1.addWordCharacters("tuli"); // "tuli" has 4 characters → adds 4
counter1.addWordCharacters("kooli"); // "kooli" has 5 characters → adds 5
// Add an array of words to count their characters
counter1.addMultipleWordsCharacters(["auto", "linn", "puu"]); // "auto" + "linn" + "puu" = 4 + 4 + 3 = 11
// Output the total character count (previous total was 13, now add 11)
console.log(counter1.getCharacterCount()); // Output: 24
