import { basename } from "path/posix";

//class in TypeScript
class Base
{
     no1 : number;
     no2 : number;
     
     //constructor
     constructor(x : number , y : number)
     {
          console.log("Base class Constructor");
          this.no1 = x;
          this.no2 = y;
     }    
     //behaveours
     fun()
     {
          console.log("inside fun of base class");
          console.log(this.no1);
          console.log(this.no2);
     }
}
//Inheritancce
class Derived extends Base
{
     Value : number;

     constructor(a:number,b:number,c:number)
     {
          console.log(" Derived Class Constructor");
          super(a,b);
          this.Value = c;
     }
     gun()
     {
          console.log("inside Derived Class");
          console.log(this.Value);
     }
}

var bobj1 : Derived = new Derived(11,21,51);
bobj1.fun();
bobj1.gun();
