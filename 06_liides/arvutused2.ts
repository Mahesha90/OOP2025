//Exercise
//Change the implementing class to calculate centimeters into inches
//Have them calculate the speed in kilometers per hour into meters per second.
//Create a class that implements the interface, where the input and output units and the calculation coefficient can be specified in the constructor.

interface CalculatingFunction {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

class KmHToMs implements CalculatingFunction {
    calculate(kmh: number): number {
        return kmh * (5 / 18);
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string {
        return "m/s";
    }
}

class CmToInches implements CalculatingFunction {
    calculate(cm: number): number {
        return cm * 0.393701;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string {
        return "in";
    }
}
