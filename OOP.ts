//Object Oriantation in typeScript

//class Declaration
class Arithmatic
{
     //Characteristics Declaration
     no1:number;
     no2:number;
     ans:number;

     constructor(iNo1:number,iNo2:number)
     {
          this.no1 = iNo1;
          this.no2 = iNo2;
          this.ans = 0;
     }


      //Behaviours
      Addition():number
     {
          this.ans = this.no1 + this.no2;
          return this.ans;
     }

     Substration():number
     {
          this.ans = this.no1 - this.no2;
          return this.ans;
     }
}
var obj1 = new Arithmatic(10,11);
var obj2 = new Arithmatic(21,11);
var iret:number = 0;
iret = obj1.Addition();
console.log("Addition of obj2 is: ",iret);

iret = obj2.Substration();
console.log("substraction of obj2 is: ",iret);