//17.1 Web application with interface
//Inches to centimeters
interface CalculatingFunction{
    calculate(x: number):number; //The calculate method takes a number (x) as input and resturns a number
    inputUnit():string;//The 'inputUnit' method returns a string representing the unit of the input (e.g., inches)
    outputUnit():string; //The 'outpuUnit' method returns a string representing the unit of the results (e.g., cm)
}

class InchesToCm implements CalculatingFunction{
 // 'InchesToCm' implements the 'CalculatingFunction' interface.
// It must provide implementations for all the methods defined in the interface.
    calculate(inches: number):number{// The 'calculate' method is implemented to convert inches to centimeters.
        return inches*2.54;
    }
    inputUnit(): string {
         // The 'inputUnit' method returns the unit for the input, which is inches.
        return "in";
    }
    outputUnit(): string{
         // The 'outputUnit' method returns the unit for the result, which is centimeters.
        return "cm";
    }
}