
//  const tinderUser = new Object()     //  This is singliton object
const tinderUser = {}                     //  Non singliton object.

console.log(tinderUser);        

tinderUser.id = "123abc";
tinderUser.name = "Awan";
tinderUser.isloggedIn = false;

console.log(tinderUser);


const regularUser = {
    email : "awan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Awan",
            lastname: "Bhai",
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)      //   for access nested objects. We can access with dot.

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }             Output:  {obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2 )     //  It will combine Obj1 and obj2.


const obj3 = {...obj1, ...obj2}     //  This method mostly used for cmbining objects.

console.log(obj3)

const users = [
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 1,
        email: "abc@gmail.com",
    },
    {
        id: 1,
        email: "abc@gmail.com",
    },
]

console.log(users[1].email)


console.log(Object.keys(tinderUser));       // For getting all keys present in tinderUser object.
console.log(Object.values(tinderUser));     //  For getting all values present in tinderUser object.
console.log(Object.entries(tinderUser));    //  OUTPUT: [ [ 'id', '123abc' ], [ 'name', 'Awan' ], [ 'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    //  For check isLoggedIn present in object or not.

