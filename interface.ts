interface Maths {
    // no1: number;
     //no2: number;
     Add();
}

class Demo implements Maths {
     Add() {
          return 10 + 21;
     }
}

var ret: number = 0;
var obj1 = new Demo();
ret = obj1.Add();
console.log("Addition is:" + ret);