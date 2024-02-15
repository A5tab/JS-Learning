const score = 100
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherNumber = 23.896
console.log(anotherNumber.toPrecision(3));

const anotherNumber1 = 123.896
console.log(anotherNumber1.toPrecision(3));
console.log(anotherNumber1.toPrecision(4));

const anotherNumber2 = 1123.896
console.log(anotherNumber2.toPrecision(3));

const values = 100000
console.log(values.toLocaleString());
console.log(values.toLocaleString('en-IN'));
console.log(values.toLocaleString('ar-EG'));

const num = Number.MAX_SAFE_INTEGER
console.log(num);

//+++++++++++++++++++++++ Maths +++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// console.log(Math.pow(2,3));
// console.log(Math.sqrt(25));
// console.log(Math.max(45,2));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



