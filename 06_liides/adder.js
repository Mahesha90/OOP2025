var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0; //Intial sum is -
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; }; //add the given number to sum
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
//adder 1 declared as Adder type but it actually holds a simple adder object
//let adder1: Adder means you're declaring a variable called adder1 that follows the Adder interface.
//new SimpleAdder() creates a new instance of the SimpleAdder class (the object that actually does the work of adding numbers).
var adder1 = new SimpleAdder();
adder1.add(3); //adds 3 to the sum
adder1.add(5); //adds 5 to the sum
console.log(adder1.getSum()); //prints 8 because sum =8
//This code defines an interface Adder, then creates a class SimpleAdder that implements it. Finally an instance of SimpleAdder is used to add numbers and print the total sum.
