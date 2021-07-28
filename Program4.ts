//Accept numeber from user and chech whether that number is even orr odd.
//Input:4
//Out:Its Even

function ChkEven(iNo:number):boolean
{
     if((iNo%2)==0)
     {
         return true;
     }
     else{
          return false;
     }

}

var iNum = 8;
var bRet:boolean = null;
bRet = ChkEven(iNum); 
if(bRet == true)
{
     console.log("number is Even Number");
}
else{
     console.log("number is Odd Number");
}