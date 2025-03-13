//Algorithm change
//Add a command to the class that allows you to find the largest value from the added elements

interface Adder{
    add(nr: number):void;
    getSum():number;
 }
 
 class CharCounter{
     constructor(protected adder:Adder){} 
     addWordCharacters(word:string):void{
         this.adder.add(word.length); 
     }
     getCharacterCount(){
         return this.adder.getSum(); 
     }
 }
 
 //first time for storing adder instead of counting adder in the previous example
 class StoringAdder implements Adder{
     protected store:number[]=[]; // Instead of maintaining a single sum, we store each number in an array.
     add(nr:number){
         this.store.push(nr);  //Instead of updating a running total, numbers are stored individually.
     }
     getSum(): number {
         let sum:number=0;
         for(let amount of this.store){sum+=amount;} // Iterate through all stored numbers and add them to compute the total sum.
         return sum; // there is no this.sum property in the class so we dont say this.sum
     }
     getAverage(){
         if(this.store.length>0){
             return this.getSum()/this.store.length; // Compute average dynamically.calculates the sum dynamically based on stored numbers.
         }
         return 0;
     }
     //New Method getRange() Added
     getRange(){
        // If no numbers have been added, return 0 as there is no range to calculate.
         if(this.store.length==0){return 0;}
         let minimum:number=this.store[0]; // Initialize `minimum` with the first element in the array.
         let maximum:number=minimum; // Initialize `maximum` with the first element in the array.
         for(let amount of this.store){  // Iterate through each number in the stored values.
             if(amount<minimum){minimum=amount;} // If the current number is smaller than the stored minimum, update `minimum`.
             if(amount>maximum){maximum=amount;} // If the current number is larger than the stored maximum, update `maximum`.
         }
         return maximum-minimum; // Return the range (difference between max & min)
     }
 }
 
 
 
 let adder1:StoringAdder=new StoringAdder(); //change this to stroingadder
 let counter1:CharCounter=new CharCounter(adder1);
 counter1.addWordCharacters("Juku");
 counter1.addWordCharacters("tuli");
 counter1.addWordCharacters("kooli");
 console.log(counter1.getCharacterCount());
 console.log(adder1.getAverage());
 console.log(adder1.getRange()); //this is new to get the range


 //array is a data structure that allows you to store multiple values under a single variable name.
 //Array: [10, 20, 30, 40, 50]