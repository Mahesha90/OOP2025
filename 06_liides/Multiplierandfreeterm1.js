var AXplusB = /** @class */ (function () {
    function AXplusB(coeficient, intercept, inputUnitType, outputUnitType) {
        this.coeficient = coeficient;
        this.intercept = intercept;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    AXplusB.prototype.calculate = function (x) {
        return this.coeficient * x + this.intercept;
    };
    AXplusB.prototype.inputUnit = function () { return this.inputUnitType; };
    AXplusB.prototype.outputUnit = function () { return this.outputUnitType; };
    return AXplusB;
}());
