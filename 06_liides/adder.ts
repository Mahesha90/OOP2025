
//first example under interface 17.1
interface Adder{
    add(nr: number):void; //A method to add a number
    getSum():number; //A method to retun the current sum
 }
 
 class SimpleAdder implements Adder{
     protected sum:number=0; //Intial sum is -
     add(nr:number){this.sum+=nr;} //add the given number to sum
     getSum(): number { //retun the current sum
         return this.sum;
     }
 }
 
 //adder 1 declared as Adder type but it actually holds a simple adder obkect
 let adder1:Adder=new SimpleAdder(); 
 adder1.add(3); //adds 3 to the sum
 adder1.add(5); //adds 5 to the sum
 console.log(adder1.getSum()); //prints 8 because sum =8