const accountId = 15155
let accountEmail = "david@gmail.com"
var accountPassword = "123456"
accountCity = "Kathmandu"
let accountState

// accountId = 2 
accountEmail = "h@gmail.com"
accountPassword = "123"
accountCity = "Pokhara"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])