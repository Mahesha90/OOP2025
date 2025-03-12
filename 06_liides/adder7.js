//Algorithm change
//Add a command to the class that allows you to find the largest value from the added elements
var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    } //Instead of directly updating sum, it stores each added number in an array
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length); // Store the length of the word
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum(); // Get the total character count
    };
    return CharCounter;
}());
var StoringAdder = /** @class */ (function () {
    function StoringAdder() {
        this.store = [];
    }
    StoringAdder.prototype.add = function (nr) {
        this.store.push(nr); //Instead of updating a running total, numbers are stored individually.
    };
    StoringAdder.prototype.getSum = function () {
        var sum = 0;
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
            var amount = _a[_i];
            sum += amount;
        } //Since numbers are stored individually, we need to compute the sum dynamically.This allows us to track each number separately.
        return sum;
    };
    StoringAdder.prototype.getAverage = function () {
        if (this.store.length > 0) {
            return this.getSum() / this.store.length; // Compute average dynamically.calculates the sum dynamically based on stored numbers.
        }
        return 0;
    };
    //New Method getRange() Added
    StoringAdder.prototype.getRange = function () {
        // If no numbers have been added, return 0 as there is no range to calculate.
        if (this.store.length == 0) {
            return 0;
        }
        var minimum = this.store[0]; // Initialize `minimum` with the first element in the array.
        var maximum = minimum; // Initialize `maximum` with the first element in the array.
        for (var _i = 0, _a = this.store; _i < _a.length; _i++) { // Iterate through each number in the stored values.
            var amount = _a[_i];
            if (amount < minimum) {
                minimum = amount;
            } // If the current number is smaller than the stored minimum, update `minimum`.
            if (amount > maximum) {
                maximum = amount;
            } // If the current number is larger than the stored maximum, update `maximum`.
        }
        return maximum - minimum; // Return the range (difference between max & min)
    };
    return StoringAdder;
}());
var adder1 = new StoringAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount());
console.log(adder1.getAverage());
console.log(adder1.getRange());
