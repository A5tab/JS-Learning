// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 35645454564545454545454654n

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["superman", "double superman", "me"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myObj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "aftab"

let anotherName = myYoutubename
anotherName = "aftab new"
console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "aftab@google.com"
console.log(userOne.email);
console.log(userTwo.email);


