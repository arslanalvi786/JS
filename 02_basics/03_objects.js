
//  Singleton

//  Two methods for declaring object:
//  1) Object.create    // It is a constructor method to declare object
//  2)Object literals


//  Onject literals:-


const mySym = Symbol("key1")

const JsUser = {
    name: "Awan",
    "full name": "Awan Bhai",
    [mySym]: "mykey1",             // We have to use Symbole like this.
    age: 18,
    location: "Lahore",
    email: "awan@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(JsUser.email)                //  Method 1 to access data from object
console.log(JsUser["email"])                 //  Method 2 to access data from object
// console.log(JsUser."full name")          //  syntax not allowed, it will give error.
console.log[JsUser["full name"]]           //  Second method good because we can't acccess full name using method one.

console.log(JsUser[mySym])                  //  We can access Symbol like this.


//  for change value in object:
JsUser.email = "Awan@yahoo.com";


//  For freezing values of keys in  object
//  Object.freeze(JsUser)                       //  Commenting this line because i want to make change in object
JsUser.email = "awan@microsoft.com"         //  Email will not be change because obect is freezed.

console.log(JsUser);

JsUser.greeting = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());

        