
//first example under interface 17.1
interface Adder{
    add(nr: number):void;
    getSum():number;
 }
 
 class SimpleAdder implements Adder{
     protected sum:number=0;
     add(nr:number){this.sum+=nr;}
     getSum(): number {
         return this.sum;
     }
 }
 
 let adder1:Adder=new SimpleAdder();
 adder1.add(3);
 adder1.add(5);
 console.log(adder1.getSum());