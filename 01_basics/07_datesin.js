
//  Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);          // It is an object.

let myCreateDate = new Date( 2025, 0 , 23)
console.log(myCreateDate);
console.log(myCreateDate.toDateString());       // for get clear/readable output/date

let myCreateDate1 = new Date("2025-01-22")      // If we want format in (yyyy-mm-dd) then use this
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date(2025, 0, 23, 5, 3)     //  For date and time both
console.log(myCreateDate2)

let myCreateDate3 = new Date(12-1-2025)             //  for date format ( dd-mm-yyyy )
console.log(myCreateDate3)

let myTimeStamp = Date.now()        // It will give current time in millisecinds

console.log(myTimeStamp)        

//  Geting only month
let newDate1 = new Date();
console.log(newDate1.getMonth()+ 1);       // For getting only moth. We use +1 because first month from 0 index.

console.log(newDate1.getDate());        // For getting only date

console.log(newDate1.getFullYear())       // For getting year only

console.log(`${newDate1.getHours()}:${newDate1.getMinutes()} is the time`);
