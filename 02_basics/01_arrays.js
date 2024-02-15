// arrays

/*
const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0]);

const myArr1 = myArr
myArr1[4] = 6
console.log(myArr1[4]);
console.log(myArr[4]);

*/

/* Array Methods */

/*
const newArr = [1, 2, 3, 4, 5]
newArr.push(6)
newArr.push(7)
newArr.pop()

newArr.unshift(9)
newArr.shift()

console.log(newArr.includes(9));
console.log(newArr.indexOf(3));

const myArr = newArr.join()
console.log(newArr);
console.log(myArr);

*/

/* Slice, Splice */

const myArr = [0, 1, 2 ,3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
