// CharCounter class that uses an Adder to count characters in words
var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length); // Adds the word length to the adder
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); // Returns the total character count
    };
    return CharCounter;
}());
// CountingAdder class implements Adder interface and adds extra features
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0; // Sum of all added numbers
        this.count = 0; // Number of added elements
        this.max = 0; // Store the maximum value added
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++;
        if (nr > this.max) {
            this.max = nr; // Update the max if the new number is larger
        }
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum; // Returns the sum of all added numbers
    };
    // Method to calculate the average of added numbers
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) {
            return this.sum / this.count;
        }
        return 0;
    };
    // New method to get the maximum value added
    CountingAdder.prototype.getMaxValue = function () {
        return this.max; // Returns the maximum value added so far
    };
    return CountingAdder;
}());
// Main code: create the CountingAdder and CharCounter instances
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
counter1.addWordCharacters("autoooo");
console.log(counter1.getCharacterCount()); // Outputs the total character count: 14
console.log(adder1.getAverage()); // Outputs the average: 4.666...
console.log(adder1.getMaxValue()); // Outputs the maximum value added: 5
