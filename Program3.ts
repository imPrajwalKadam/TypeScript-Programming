//Accept number from user and return the addition of all numbers till that number.
//Input:4
//output:10(1+2+3+4)

function Addition(iNo : number)
{
     var iCnt = 0;
     var iSum = 0;
     for(iCnt = 1;iCnt<=iNo;iCnt++)
     {
          iSum = iSum + iCnt;
     }
     return iSum;
}
var iNum:number = 4;
var iRet: number = 0;

iRet = Addition(iNum);

console.log("Addition of number is",iRet);

