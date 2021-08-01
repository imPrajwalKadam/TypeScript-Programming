/*import {fun} from "./Server"


     var inum1:number = 11;
     var inum2:number = 20;
     var iRet:number = 0;

     iRet =fun(inum1,inum2)
     console.log("Addition is:",iRet);*/


     import{Arithmatic} from "./Server"
     
var obj1 = new Arithmatic(10,11);
var obj2 = new Arithmatic(21,11);
var iret:number = 0;
iret = obj1.Addition();
console.log("Addition of obj2 is: ",iret);

iret = obj2.Substration();
console.log("substraction of obj2 is: ",iret);