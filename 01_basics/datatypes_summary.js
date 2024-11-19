// Primitive

//  7 types : string, number, boolean, null, undefiend, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp =null
let userEmail; 

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

// const bigNumber = 464613545464n 

// Reference (Non primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraaj", "maas"];
let myObj = {
    name : "Aditya",
    age :  "22"
}

const myFunction = function (){
    console.log("Hello world");
    
}

console.log(typeof heros);
