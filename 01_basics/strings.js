const name = "david"
const repoCount = 10

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('david-g')

// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "    david    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://organic-parakeet-5gvv6gp499g3q55.github.dev/"
console.log(url.replace('-', '%20'));