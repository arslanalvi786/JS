
// Two types of datatypes:-

//  Premitive

//  7 types:    string, Number, Boolean, null, undefined, symbol, BigInt

const score=100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 2345457870917585176n


// Reference (Non- premitive):-

//  Arrays, Objects, Functions

const heros = ["Superman, Batman, Hulk", "Spiderman"];

let myObj = {
    name: Awan,
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}


//  finding datatype of variable 'bigNumber' decleare above
console.log(typeof bigNumber)

