interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

// Class AXplusB implements the CalculatingFunction interface.
// This class represents a linear function of the form: y = coeficient * x + intercept.
class AXplusB implements CalculatingFunction{
    // Constructor with parameters: coeficient, intercept, input unit, and output unit.
    constructor(protected coeficient:number,  // 'coeficient' is the slope of the line (m in y = mx + b)
        protected intercept:number, // 'intercept' is the y-intercept of the line (b in y = mx + b)
	    protected inputUnitType:string ,  // 'inputUnitType' is the unit for input (e.g., "inches")
        protected outputUnitType:string // 'outputUnitType' is the unit for output (e.g., "cm")
    ){}
    // The calculate function implements the calculation for y = coeficient * x + intercept.
	calculate(x:number):number{
	   return this.coeficient*x+this.intercept; // Perform the linear calculation based on the given input 'x'
	}
    // Returns the input unit (e.g., "inches").
	inputUnit():string{return this.inputUnitType;}
    // Returns the output unit (e.g., "cm").
	outputUnit():string{return this.outputUnitType;}
}