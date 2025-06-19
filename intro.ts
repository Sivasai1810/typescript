// Basic datatype
//Primitive type (numbers,boolean ,string)
//arrays
//tuples
//Enums
//any,unknown,void,null,undefined,never 
const a=0
let b=99
b=778
var c=9090
c=123444444444
let arr:number[] =[1,2,3]
//tuples if the array is fixed define in the tuples way 
let arr1:[number,string]=[12,"sivasai"]
//Enums
enum Fruits{
    APPLE="apple",
    BANANA="banana"
}
function eat(fruit:Fruits){
 if(fruit==Fruits.APPLE){
    console.log("you ate th apple")
 }
 {
    console.log("you ate the banana")

 }
}
eat(Fruits.APPLE) //it will run 
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
enum statuscode {
    INTERNALSERVERERROR="internalservererror status code 500",
    NOTFOUND="not found with code 404",
    EVERYTHINGISFINE="ok with status code 200"


}
statuscode.NOTFOUND
//any unknown null undefined void never
//in any typescript wil switch -off his brain
let s;//type any
s=3;
s="sai"
s.toUpperCase()
//its fine
//if we define in unknown 
let h:unknown
h=3;
h="siva";
s.toUpperCase()
//in any it doesnot check it will pass any argument to the variable so its a bad way
//in unkown it will first check the type what is it type if this type is ok for this operation then only it will pass if its not it shows the runtime error
//never
function call():void{
    while(true){

    }
}
call()
console.log("ready for void ")
//see the both void and never you will understands
function call2():never{
    while(true){

    }
}
call2()
console.log("ready for void ")
//in this never the console wipp never trigger because in never its a loop it will only run inside the function 