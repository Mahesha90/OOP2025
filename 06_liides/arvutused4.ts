//Switching implementing classes excersice

interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

class CmToInches implements CalculatingFunction{
    calculate(inches: number):number{
        return inches/2.54;
    }
    inputUnit(): string {
        return "cm";
    }
    outputUnit(): string{
        return "in";
    }
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class KmHToMs implements CalculatingFunction {
    calculate(kmh: number): number {
        return kmh * (5 / 18); // Conversion formula: 1 km/h = 5/18 m/s
    }
    inputUnit(): string {
        return "km/h";
    }
    outputUnit(): string {
        return "m/s";
    }
}

//Convert Meters per Second (m/s) to Kilometers per Hour (km/h)
class MsToKmH implements CalculatingFunction {
    calculate(ms: number): number {
        return ms * (18 / 5); // Conversion formula: 1 m/s = 18/5 km/h
    }
    inputUnit(): string {
        return "m/s";
    }
    outputUnit(): string {
        return "km/h";
    }
}
