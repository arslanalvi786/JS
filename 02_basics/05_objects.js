
const course = {
    coursename: "JavaScript",
    price: 999,
    courseInstructor: "Awan",
}

// ANother method to print value of keys on object 

// const {courseInstructor} = course   //  By using this we can write only courseinstructor for print data. exapmle in next line.

// console.log(courseInstructor)

const {courseInstructor : instructor} = course

console.log(instructor)

/* {                                //  JSON form
    "name": "Awan",
    "coursename": "javascript",
    "price": "free",
} */