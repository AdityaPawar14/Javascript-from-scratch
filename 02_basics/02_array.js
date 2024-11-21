const marvel_Heros = ["thor", "ironman", "spiderman"]
const DC_Heros = ["superman", "batman", "flash"]

// marvel_Heros.push(DC_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3] [1]);

const allHeros = marvel_Heros.concat(DC_Heros)
// console.log(allHeros);


const all_new_heros = [...marvel_Heros, ...DC_Heros]

// console.log(all_new_heros);


const anotherArr = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]

const real_another_array = anotherArr.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "Aditya"}))  //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
