const arr = ["aftab", "moiz", "fasih", "mutee"]
const arr1 = ["shaiq", "kashan", "ali"]

// arr.push(arr1)
// console.log(arr);
// console.log(arr[4]);
// console.log(arr[4][1]);

// const combArr = arr.concat(arr1)
// console.log(combArr);

// const combArr = [...arr, ...arr1]
// console.log(combArr);

// const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realArr = anotherArr.flat(1)
// const realArr = anotherArr.flat(2)
// const realArr = anotherArr.flat(Infinity)
// console.log(realArr);


console.log(Array.isArray("Aftab"));
console.log(Array.from("Aftab"));
console.log(Array.from({name: "Aftab"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

