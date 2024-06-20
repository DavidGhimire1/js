let myDate = new Date()
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 5, 28)
// let myCreatedDate = new Date(2024, 5, 28, 7, 10, 59)
let myCreatedDate = new Date("2024-06-28")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() + 1);

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})