const name = "Aditya"
const age = 22

// console.log(name + age + " Value")

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String(`Aditya-ap-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(-8, 5)

console.log(newString);


const anotherString = gameName.slice(-6,3)

console.log(anotherString);

const newStringOne = "   Aditya   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aditya.com/aditya%30pawar"

console.log (url.replace('%30', '-'))

console.log(url.includes('aadi'));

console.log(gameName.split('-'));


