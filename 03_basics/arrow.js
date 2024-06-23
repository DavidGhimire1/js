const user = {
    username: "David",
    price: 9999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to this website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);

// function chiya(){
//     let username = "David"
//     console.log(this.username);
// }
// chiya()

// const chiya = () => {
//     let username = "David"
//     // console.log(this.username);
//     console.log(this);
// }
// chiya()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5))

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "David"})

console.log(addTwo(3, 5))