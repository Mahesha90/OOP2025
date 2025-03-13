//The draw() function creates a series of small filled squares (pixels) on a grid to visually represent the calculated values (e.g., inches converted to cm).

interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
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

// Class to draw a figure using a calculation function
class Figure{
   constructor(protected calculator:CalculatingFunction, protected g){
      this.draw(); // Calls the draw function when the object is created
   }
   draw(){
      for(let i=0; i<25; i++){   // Loop from 0 to 24
	      this.g.fillRect(10*i, // X position: moves right with each step
            300-10*this.calculator.calculate(i), // Y position: height is based on calculation
            3, // Width of the rectangle
            3); // Height of the rectangle
	  }
   }
}