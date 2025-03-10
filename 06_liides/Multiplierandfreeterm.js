var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (inches) {
        return inches / 2.54;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
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
