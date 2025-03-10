var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var Figure = /** @class */ (function () {
    function Figure(calculator, g) {
        this.calculator = calculator;
        this.g = g;
        this.draw();
    }
    Figure.prototype.draw = function () {
        for (var i = 0; i < 25; i++) {
            this.g.fillRect(10 * i, 300 - 10 * this.calculator.calculate(i), 3, 3);
        }
    };
    return Figure;
}());
