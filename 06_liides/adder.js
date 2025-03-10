var SimpleAdder = /** @class */ (function () {
    function SimpleAdder() {
        this.sum = 0;
    }
    SimpleAdder.prototype.add = function (nr) { this.sum += nr; };
    SimpleAdder.prototype.getSum = function () {
        return this.sum;
    };
    return SimpleAdder;
}());
var adder1 = new SimpleAdder();
adder1.add(3);
adder1.add(5);
console.log(adder1.getSum());
