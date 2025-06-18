"use strict";
// Basic datatype
//Primitive type (numbers,boolean ,string)
//arrays
//tuples
//Enums
//any,unknown,void,null,undefined,never 
const a = 0;
let b = 99;
b = 778;
var c = 9090;
c = 123444444444;
let arr = [1, 2, 3];
//tuples if the array is fixed define in the tuples way 
let arr1 = [12, "sivasai"];
//Enums
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "apple";
    Fruits["BANANA"] = "banana";
})(Fruits || (Fruits = {}));
function eat(fruit) {
    if (fruit == Fruits.APPLE) {
        console.log("you ate th apple");
    }
    {
        console.log("you ate the banana");
    }
}
eat(Fruits.APPLE); //it will run 
//eat("apple") //it will not run in js but run in the objects
//it was lke object with strict type info we dont need to add extra variable ones we assigned the value 
// const Fruit = {
//   Apple: "APPLE",
//   Banana: "BANANA"
// };
// function eat(fruit: string) {
//   if (fruit === Fruit.Apple) {
//     console.log("You ate an apple");
//   }
// }
// eat(Fruit.Apple);     //  OK
// eat("APPLE");         // Also OK
// eat("PINEAPPLE");     // Still allowed (but dangerous!)
var statuscode;
(function (statuscode) {
    statuscode["INTERNALSERVERERROR"] = "internalservererror status code 500";
    statuscode["NOTFOUND"] = "not found with code 404";
    statuscode["EVERYTHINGISFINE"] = "ok with status code 200";
})(statuscode || (statuscode = {}));
statuscode.NOTFOUND;
