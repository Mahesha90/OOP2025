var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    // 'InchesToCm' implements the 'CalculatingFunction' interface.
    // It must provide implementations for all the methods defined in the interface.
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        // The 'inputUnit' method returns the unit for the input, which is inches.
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        // The 'outputUnit' method returns the unit for the result, which is centimeters.
        return "cm";
    };
    return InchesToCm;
}());
