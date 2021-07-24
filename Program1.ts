//data Types in TypeScript

var iNo: number = 11;
console.log("value is ", iNo);
console.log(typeof iNo);

var iNo1 = 21;
console.log("value is ", iNo1);
console.log(typeof iNo1);

var iBol = true;
console.log(typeof iBol)
console.log("Value is:", iBol);

var iStr = `hello World`;
console.log(typeof iStr)
console.log("Our String is:", iStr);

var no = 3.14;
console.log(typeof no);

var iNo2;
console.log(typeof iNo2);

var iNo3 = null;
console.log(typeof iNo3);
console.log("value is:", iNo3);

//Homogenous
var arr: number[] = [11, 21, 51, 101];
console.log("Value is:", arr);
console.log(arr[2]);
console.log(typeof arr);

//Hetrogenous
//Touple in TypeScript
var arr1 = [11, "Prajwal", 51, 101];
console.log("Value is:", arr1);
console.log(arr1[1]);
console.log(typeof arr1);


//Constant In TypeScript
const iValue: number = 51;
//iValue = 101;  Error( Cannot assign to 'iValue' because it is a constant.)
console.log("Value is:", iValue);

var iValue1: number = 121;
iValue1 = 101;
console.log("Value is:", iValue1);

//const iValue2:number;  Error('const' declarations must be initialized.)

//Sequence
var No1 : number = 10;
var No2 : number = 20;
var ans : number = 0;

ans = No1+No2;
console.log("addition is:",ans);

//Functions in TypeScript
function Summation(a:number, b:number)
{
     return a+b;
}
var No3 : number = 11;
var No4 : number = 51;
var ans1 : number = 0;
ans1 = Summation(No3,No4);
console.log("Addition is:",ans1);