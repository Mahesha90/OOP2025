//Exercise
//Change the implementing class to calculate centimeters into inches
//Have them calculate the speed in kilometers per hour into meters per second.
//Create a class that implements the interface, where the input and output units and the calculation coefficient can be specified in the constructor.
var KmHToMs = /** @class */ (function () {
    function KmHToMs() {
    }
    KmHToMs.prototype.calculate = function (kmh) {
        return kmh * (5 / 18);
    };
    KmHToMs.prototype.inputUnit = function () {
        return "km/h";
    };
    KmHToMs.prototype.outputUnit = function () {
        return "m/s";
    };
    return KmHToMs;
}());
var CmToInches = /** @class */ (function () {
    function CmToInches() {
    }
    CmToInches.prototype.calculate = function (cm) {
        return cm * 0.393701;
    };
    CmToInches.prototype.inputUnit = function () {
        return "cm";
    };
    CmToInches.prototype.outputUnit = function () {
        return "in";
    };
    return CmToInches;
}());
