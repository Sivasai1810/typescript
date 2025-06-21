//interfaces and type aliases
interface users{
    name:string,
    email:string,
    password:number,
    gender?:string//?means its optional if we can use this variable or not our wish
}
function student(obj:users){
    obj.name="sivsaiwwww"
    console.log(obj.name)
}
student({name:"testcase" ,email:"email@gmail.com" ,password:1234})
//extending interfaces
interface Admin extends users{
    admin:boolean
}
//extend means what every in the user object we can use in the admin and also we
//  are adding new variable or called admin variable 
//
function admins(obj2:Admin){

}
admins({name:"sivasa",email:"dddd",password:454545 , admin:true})
type id=number |string;
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: "Siva",
  age: 20
}; 

