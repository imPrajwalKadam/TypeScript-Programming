//function in TypeScript
console.log("Demo");
function fun()
{
     console.log("Inside fun");
}

fun();
///////////////////////////////////////////////////////////////////////////////////////////
function Addition(Num1: number ,Num2: number) 
{
     var ans: number = 0;
     ans = Num1 + Num2;
     console.log(i)
     return ans;
}

var i : number =10;
var j : number = 21;
var ret :number = 0;
ret = Addition(i,j);
console.log(ret);

function Area(Radious:number,PI:number)
{
     var ans:number = 0;
     ans = PI * Radious*Radious;
     return ans;
}
var no:number = 10.2;
var ret:number = 0;
ret = Area(no,3.14);
console.log("Area is:",ret);

///

function Gun(name:string, passport ?,nationallity = "Indian")
{
     console.log("name is:",name);
     if(passport == undefined)
     {
          console.log("Sorry i dont have passport...");
     }
     else{
          console.log("Passport number is:",passport);
     }
     console.log("Nationallity is",nationallity);
    
}
Gun("Athava",11,"Bangladeshi");

//Rest paramiters/Variable number of arguements
