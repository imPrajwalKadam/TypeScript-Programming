//Object Oriantation in TypeScript

class Maths
{
     Arr:number[];
     constructor(ArrX:number[])
     {
          this.Arr = ArrX; 
     }

     Display()
     {
          var i:number = 0;
          for(i = 0;i <= this.Arr.length;i++)
          {
               console.log(this.Arr[i]);
          } 
     }
     Addition()
     {
          var iSum:number = 0;
          for(var iCnt:number = 0;iCnt<this.Arr.length;iCnt++)
          {
               iSum = iSum + this.Arr[iCnt];
          }
          return iSum;
     }
}
var ret:number = 0; 
var Arr1 : number[] = [2,4,6,8];
var obj1 = new Maths(Arr1);
obj1.Display();
ret = obj1.Addition();
console.log("Addition of Array is:",ret);



