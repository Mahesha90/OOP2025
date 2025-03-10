var CharCounter = /** @class */ (function () {
    function CharCounter(adder) {
        this.adder = adder;
    }
    CharCounter.prototype.addWordCharacters = function (word) {
        this.adder.add(word.length);
    };
    CharCounter.prototype.getCharacterCount = function () {
        return this.adder.getSum();
    };
    return CharCounter;
}());
var CountingAdder = /** @class */ (function () {
    function CountingAdder() {
        this.sum = 0;
        this.count = 0; //Initialize the count property to -, it will track how many numbers have been added
    }
    CountingAdder.prototype.add = function (nr) {
        this.sum += nr;
        this.count++; //Increment the count to keep track of how many numbers have been added
    };
    CountingAdder.prototype.getSum = function () {
        return this.sum;
    };
    // New method to This method calculates and returns the average of all the numbers added
    CountingAdder.prototype.getAverage = function () {
        if (this.count > 0) { //Check if there re any numbers added (i.e., count is greater tan 0)
            return this.sum / this.count; //If count is greater than 0, calculate and retun the average
        }
        return 0; //return 0 if no numbers have been added yet, retun 0 to avoid the division by 0
    };
    return CountingAdder;
}());
var adder1 = new CountingAdder();
var counter1 = new CharCounter(adder1);
counter1.addWordCharacters("Juku");
counter1.addWordCharacters("tuli");
counter1.addWordCharacters("kooli");
console.log(counter1.getCharacterCount()); //outputs the total chracter count=14
console.log(adder1.getAverage()); //outputs the avaerage length of the words: 4.666
