//Primitive Datatypes

//7 Primitive Datatypes - String, boolean, number,null, BigInt, undefined, symbol


//Non Primitive Datatypes (Reference Variable)
//Object, functions, Array

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);  //output will be false because Symbols in JavaScript are unique and immutable primitive values


const bigInt = 94857345080984n;     //The 'n' suffix tells JavaScript to treat it as BigInt

//Arrays
const fruits = ["Apple", "Banana", "Grapes"]

//Objects
let myObj = {}        // Create empty object
myObj.name = "Rutuja" // Use equals (=) when assigning after creation
myObj.age = 21

// OR
myObj["name"] = "Rutuja"
myObj["age"] = 21

let person = {
    personname : "Rutuja" ,
    personage : 22
}

//Functions
const myFunction = function () {
    console.log("Hello World!");
}


//return type of all non primitive types are object 
console.log = (typeof myFunction);