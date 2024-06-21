// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "David",
    "full name": "David Ghimire",
    [mySym]: "mykey1",
    age: 21,
    location: "Baneshwor",
    email: "d@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Sunday", "Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dg@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "dg2@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// +++++++++++++++++++Objects+++++++++++++++++++++++

// const ramUser = new Object()   sinleton object
const ramUser = {}               // non-singleton object

ramUser.id = "1223ab"
ramUser.name = "Ram"
ramUser.isLoggedIn = false

// console.log(ramUser);

const regularUser = {
    email: "one@gmail.com",
    fullname: {
        userfullname:{
            firstname: "david",
            lastname: "ghimire"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(ramUser);

// console.log(Object.keys(ramUser));
// console.log(Object.values(ramUser));
// console.log(Object.entries(ramUser));

// console.log(ramUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js basics",
    price: "99",
    courseInstructor: "david"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "david",
//     "coursename": "js basics",
//     "price": "free"
// }

[
    {},
    {},
    {}
]