
const score = 400
console.log(score)      // it will auto detect that its a number

const balance = new Number(100);    //  it will define that its a number.
console.log(balance)


console.log(balance.toString().length);     //  it will convert it into string
console.log(balance.toFixed(2))

const othernumber = 123.8966

console.log(othernumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));


//==>   +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));          //  it will convert it into +ve number
console.log(Math.round(4.5));      //  it will round of the value.
console.log(Math.ceil(4.3));        //  it will give the upper value
console.log(Math.floor(4.6));       //  it will give the lower value
console.log(Math.min(4, 6, 3, 5));       //  it will give minimum value
console.log(Math.max(4, 6, 9, 2));       //  it will give maximum value

console.log(Math.random());             //  it will give values between 0 and 1 


console.log(Math.random())
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)