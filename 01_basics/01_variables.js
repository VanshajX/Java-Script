const accountId = 144553
let accountEmail = "Vanshaj@gmail.com"
var accountPassword = "12345"
accountCity = "Gwalior"
let accountState;
// accountId = 2 not allowed in const

accountEmail = "vs@vs.com"
accountPassword = "2121121"
accountCity = "Sagar"

/*
Prefer not to used var because of issue in functional scope and block scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
