interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}


class AXplusB implements CalculatingFunction{
    constructor(protected coeficient:number, 
        protected intercept:number,
	    protected inputUnitType:string , 
        protected outputUnitType:string
    ){}
	calculate(x:number):number{
	   return this.coeficient*x+this.intercept;
	}
	inputUnit():string{return this.inputUnitType;}
	outputUnit():string{return this.outputUnitType;}
}