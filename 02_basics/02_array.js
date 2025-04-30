const marvel_heros = ["thot", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);              //  Output:- [ 'thot', 'Ironman', 'Spiderman', [ 'Superman', 'flash', 'Batman' ] ]
// console.log(marvel_heros[3][1]);        //  Output will be flash

const allHeros = marvel_heros.concat(dc_heros)      // Concat used to combine arrays
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]    // 2nd method for combining arrays
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Awan"))      //  This will check "Awan" is an array or not
console.log(Array.from("Awan"))         //  This will convert Awan into array like: [ 'A', 'w', 'a', 'n' ]

console.log(Array.from({name: "Awan"}))         // This will give empty array (imp question)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
