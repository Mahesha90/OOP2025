// More versatile implementation
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
 
 class CountingAdder implements Adder{
     protected sum:number=0;
     protected count:number=0; //Initialize the count property to -, it will track how many numbers have been added
     add(nr:number){ 
         this.sum+=nr;
         this.count++; //Increment the count to keep track of how many numbers have been added
     }
     getSum(): number {
         return this.sum;
     }
     // New method to This method calculates and returns the average of all the numbers added
     getAverage(){
         if(this.count>0){ //Check if there re any numbers added (i.e., count is greater tan 0)
             return this.sum/this.count; //If count is greater than 0, calculate and retun the average
         }
         return 0; //return 0 if no numbers have been added yet, retun 0 to avoid the division by 0
     }
 }
 
 let adder1:CountingAdder=new CountingAdder();
 let counter1:CharCounter=new CharCounter(adder1);
 counter1.addWordCharacters("Juku");
 counter1.addWordCharacters("tuli");
 counter1.addWordCharacters("kooli");
 console.log(counter1.getCharacterCount()); //outputs the total chracter count=14
 console.log(adder1.getAverage()); //outputs the avaerage length of the words: 4.666