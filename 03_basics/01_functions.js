

function sayMyName(){
    console.log("A");
console.log("R");
console.log("S");
console.log("L");
console.log("A");
console.log("N");
}

sayMyName();

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers()             //  Output: NaN

addTwoNumbers( 3 , 4)       //  OUTPUT: 7

addTwoNumbers(3, "4")       //  Output: 34

addTwoNumbers(3, "a")       //  Output: 3a

addTwoNumbers(3, null)       //  Output: 3

const result = addTwoNumbers(3,5)      // OUTPUT: 8

console.log("result: ", result);        //  OUTPUT: result: undefined       (Because console not returns the value.)

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    return result;
    console.log("Arslan")           //This line cannot be run. Because after return no line will run. For run this line i have to write this line before the return line.
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2;
    console.log("Arslan")               //  now this line can be run/ execute.
    return result;
}

function addTwoNumbers(number1, number2){
    return number1 + number2;                   // 2nd method for add 2 numbers
}


function loginUserMassage(username){
    return `${username} just logged in`
}

console.log(loginUserMassage("Arslan"))         //  For print loginudermassage.
console.log(loginUserMassage())              //  Outpu: undefined just logged in.


// (...) => this is called rest operator and spread operator. depend on situation

function calculateCartPrice(...num1){       //  rest 0perator(...) used for multiple parameters. When we dont know number of parameters.
    return num1;
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username : "Arslan",
    price : 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({                  //  OUTPUT:   username is sam and price is 199
    username: "sam",                
    price: 199,
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))      //OUTPUT:   400
console.log(returnSecondValue([200, 400, 500, 1000]))      //OUTPUT:   400