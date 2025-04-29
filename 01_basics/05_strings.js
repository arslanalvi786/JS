
const name = "Awan"
const repoCount = 50

//  This is old method to combine variables:-

//  console.log (name + repoCount + " Value");

//  This is new method to combine variables:-

console.log(`Hello my name is ${name} and my reepo count is ${repoCount}`);

//  We can easily use toUpperCase with the help of ${}.

console.log(`My name is ${name.toUpperCase()}`)

//  We can declare string like this:
const gameName = new String (`awan-hc-com`)

console.log(gameName[0]);


//==>     String methods :-

console.log(gameName.__proto__);

//  Finfing length
console.log(gameName.length)

// Conveert in upper and lower lettters
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

//  Finding position of any character
console.log(gameName.charAt(2))

//  Finding index by using letter
console.log(gameName.indexOf('w'))

//  Printing 2 digit of name sotred in gameName
const newString = gameName.substring(0, 2)
console.log(newString);

//  Slice also use -ve value which give reverse values/output
const anotherString = gameName.slice(-3,-1)
console.log(anotherString)

const newStringOne = "  Awan    "

//  Trim used to remove space before and end of the letter.
console.log(newStringOne.trim());

//  Start trim used for remove space on the left side space of letter, and end trim is used for remove right side space of the letter.

//  using replace method of string
const url = "http://awan.com/awan%20login"
console.log(url.replace('%20' , '-'))

//  check awan present in url or not:-
console.log(url.includes('awan'))

 // another example of includes
 console.log(url.includes('malik'));


//  split use for finding words which sperates with splits like (-, , space, etc) 
console.log(gameName.split('-'));

