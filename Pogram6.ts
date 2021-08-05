class Arithmatic
{
     iNum1:number;
     iNum2:number;
     iResult:number;

     constructor(iNo1:number,iNo2:number)
     {
          this.iNum1 = iNo1;
          this.iNum2 = iNo2;
          this.iResult = 0; 
     }
      Addition()
     {
          this.iResult = this.iNum1 + this.iNum2;
          return this.iResult;

     }
}
class ArithmaticX extends Arithmatic
{
     constructor(iNum1:number,iNum2:number)
     {
     super(iNum1,iNum2)
     }
     Substraction()
     {
          this.iResult = this.iNum1 - this.iNum2;
          return this.iResult;
     }
}
var ret:number = 0;
var obj1 = new ArithmaticX(11,21);

ret = obj1.Addition();
console.log("Addition is:",ret);
ret = obj1.Substraction();
console.log("Substraction is:",ret);
