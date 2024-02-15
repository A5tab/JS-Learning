let myDate = new Date()
console.log(myDate.toString()); // Wed Feb 14 2024 09:50:20 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toJSON()); // 2024-02-14T04:50:20.328Z
console.log(myDate.toISOString()); // 2024-02-14T04:50:20.328Z
console.log(myDate.toDateString()); // Wed Feb 14 2024
console.log(myDate.toLocaleDateString()); // 14/02/2024
console.log(myDate.toLocaleTimeString()); // 9:50:20 am

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 2, 11)
console.log(myCreatedDate.toDateString());

let myDateTime = new Date(2004, 4, 18, 10, 3)
console.log(myDateTime.toLocaleString());

// let timeFormat = new Date("02-14-2024")
// let timeFormat = new Date("2024-02-14")
let timeFormat = new Date("14-02-2024") // Invalid Date
console.log(timeFormat.toLocaleString());


/* Time Stamps */
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDateTime.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})

