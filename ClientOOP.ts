import {CircleX}from "./Server"
var ret: number = 0;
var obj1 = new CircleX(5, 3.14);

ret = obj1.Area();
console.log("Inside Circle Class:")
console.log("Area of Circle is:", ret);

ret = obj1.Circumference();
console.log("Inside CircleX Class:")
console.log("Circumference of Circle is: " + ret);



/*OutPut:
        Inside Circle Class:
        Area of Circle is: 78.5
        Inside CircleX Class:
        Circumference of Circle is: 31.400000000000002
 */