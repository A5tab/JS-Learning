const name = "Aftab"
const repoCount = 50

console.log(name + repoCount + ", Welcome");

//String Interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Aftab145")
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.slice(-4, 5));
console.log(gameName.split("1"));

const str = "Hello, World";
console.log(str.slice(-5));

let status = "online"
console.log(status.slice(-5,5)); // will print nlin