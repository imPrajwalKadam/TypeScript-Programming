//Armstong numbers or note
//Armstong numbers:1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748

import { isTypedArray } from "util/types";

function ChkArmstrong(iNo:number):boolean
{
     var iSum : number = 0;
     var iTemp : number = iNo;
     var iCube : number = 1;
     var iCnt : number = 0;
     var iDigit : number = 0;

     while(iTemp != 0)
     {
          iTemp = (iTemp/10|0);
          iCnt++;
     }
     iTemp = iNo;
     while(iTemp != 0)
     {
          iDigit = iTemp % 10;
          for(var i = 1; i <= iCnt ;i++)
          {
               iCube = iCube * iDigit;
          }
          iSum = iSum + iCube;
          iCube = 1;
          iTemp = (iTemp/10|0);
     }
     if(iSum == iNo)
     {
          return true;
     }
     else{
          return false;
     }
}

var bRet:boolean;
var iValue:number = 8208;
bRet = ChkArmstrong(iValue);
if(bRet == true)
{
     console.log("Armstrong number");
}
else{
     console.log("It is not armStrong number");
}