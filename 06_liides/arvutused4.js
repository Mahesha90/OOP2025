//Switching implementing classes excersice
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
var KmHToMs = /** @class */ (function () {
    function KmHToMs() {
    }
    KmHToMs.prototype.calculate = function (kmh) {
        return kmh * (5 / 18); // Conversion formula: 1 km/h = 5/18 m/s
    };
    KmHToMs.prototype.inputUnit = function () {
        return "km/h";
    };
    KmHToMs.prototype.outputUnit = function () {
        return "m/s";
    };
    return KmHToMs;
}());
//Convert Meters per Second (m/s) to Kilometers per Hour (km/h)
var MsToKmH = /** @class */ (function () {
    function MsToKmH() {
    }
    MsToKmH.prototype.calculate = function (ms) {
        return ms * (18 / 5); // Conversion formula: 1 m/s = 18/5 km/h
    };
    MsToKmH.prototype.inputUnit = function () {
        return "m/s";
    };
    MsToKmH.prototype.outputUnit = function () {
        return "km/h";
    };
    return MsToKmH;
}());
