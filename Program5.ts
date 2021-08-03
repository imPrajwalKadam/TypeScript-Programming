//Accept numeber from user and chech whether that number is
//Divisible by 3 and 5

/////////////////////////////////////////////
//Function name:CheckDivisible
//input:Integer
//Output:Boolean(True/false)
//Discription:it is used to check whether Divisible by 3and 6
//Date:03/08/2021
//Author:Prajwal kadam
///////////////////////////////////////////////////////

function CheckDivisible(iNo:number):boolean
{
     if((iNo%3==0)&&(iNo%6==0))
     {
          return true;
     }
     else{
          return false;
     }
}
var iValue:number = 12;
var bret:boolean = null;

bret = CheckDivisible(iValue);     
if(bret == true)
{
     console.log("number is Divisible by 3 and 6:");
}
else{
     console.log("it is not Divisible:")
}