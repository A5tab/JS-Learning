// var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "aftab"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if(true) {
    const username = "Aftab"
    if (username === "Aftab") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++

// Hoisting:
// In JavaScript, hoisting allows you to use functions and variables before they're declared.
console.log(foo);
var foo = 'foo'

addOne(5)
function addOne(num) {
    return num + 1
}

// addOne(5)
// console.log(addOne(5)); 


// addTwo(5)
const addTwo = function(num) {
    return num + 2
}

addTwo(5)