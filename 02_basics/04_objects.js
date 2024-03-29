// const tinderUser = new Object() // singleton object

const tinderUser = {} // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname: "Aftab"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {

    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {

    },
    {

    }
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js with chai",
    price: "000",
    courseinstructor: "hitesh"
}

// console.log(course['price']);

// Object De-Structure
const {courseinstructor: instructor} = course

// console.log(courseinstructor);
console.log(instructor);


/* JSON */
// {
//     "name": "Aftab",
//     "coursename": "js with chai",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]