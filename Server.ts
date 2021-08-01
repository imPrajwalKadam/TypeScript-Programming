export class Arithmatic
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