
//  Arrays

const myArr = [0, 1, 2, 3, 4, 5]                            // Method 1 to declare array
const myHeros = ["Superman", "Spiderman", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)                        // Method 2 to declare array
console.log(myArr[0])

console.log(myHeros[1])
console.log(myArr2[1])

//  Array methods

myArr.push(6)               //  push value from end
console.log(myArr)

myArr.pop()                 //  remove value from last

myArr.unshift(9)            //  it will add value at start
myArr.shift()               //  it will remove value from start
console.log(myArr)          

console.log(myArr.includes('9'))        //  This is used for finding someting in array

console.log(myArr.indexOf(9))         // This will help in finding index of any value
console.log(myArr.indexOf(3))         // This will help in finding index of any value

const newArr = myArr.join()             //  This will convert array into string

console.log(myArr)
console.log(newArr)


//  slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)          //  it will give numbers according to start and end index metioned in it

console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)         // it will remove numbers according to start and end index mentiones in parameters

console.log(myn2)

console.log("C", myArr)
console.log(myn2)
