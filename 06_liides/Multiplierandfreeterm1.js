// Class AXplusB implements the CalculatingFunction interface.
// This class represents a linear function of the form: y = coeficient * x + intercept.
var AXplusB = /** @class */ (function () {
    // Constructor with parameters: coeficient, intercept, input unit, and output unit.
    function AXplusB(coeficient, // 'coeficient' is the slope of the line (m in y = mx + b)
    intercept, // 'intercept' is the y-intercept of the line (b in y = mx + b)
    inputUnitType, // 'inputUnitType' is the unit for input (e.g., "inches")
    outputUnitType // 'outputUnitType' is the unit for output (e.g., "cm")
    ) {
        this.coeficient = coeficient;
        this.intercept = intercept;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    // The calculate function implements the calculation for y = coeficient * x + intercept.
    AXplusB.prototype.calculate = function (x) {
        return this.coeficient * x + this.intercept; // Perform the linear calculation based on the given input 'x'
    };
    // Returns the input unit (e.g., "inches").
    AXplusB.prototype.inputUnit = function () { return this.inputUnitType; };
    // Returns the output unit (e.g., "cm").
    AXplusB.prototype.outputUnit = function () { return this.outputUnitType; };
    return AXplusB;
}());
