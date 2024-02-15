// singleton
// Object.create

// Symbol declaration
const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Aftab",
    "full Name": "Muhammad Aftab",
    [mySym]: "mykey1",
    age: 18,
    location: "Rawalpindi",
    email: "aftab@google.com",
    isLoggedIn: true,
    logInDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["full Name"]); // If key is full Name then can't be accessed thorugh using dot like JsUser.full Name so we have to use JsUser["full Name"]
// Above line not applies in fullName it is treated normally

console.log(JsUser[mySym]);

JsUser.isLoggedIn = false
console.log(JsUser.isLoggedIn);

// Object.freeze(JsUser)
JsUser.isLoggedIn = true
console.log(JsUser.isLoggedIn);

JsUser.greeting = function () {
    console.log("Welcome, JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Welcome, JS User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());