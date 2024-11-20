//  Dates


let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
 
// let myCreateDate = new Date(2024, 2, 25)
let myCreateDate = new Date(2024, 2, 25, 4, 8)
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);


let newDate = new Date ()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "long"
})