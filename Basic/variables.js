const accountID = 14452
let accountEmail = "abhisekprasad8@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 is not allowed beacuse constat keyword

accountEmail = "add@gmail.com"
accountPassword = "2324234"
accountCity = "Bengaluru"

console.log(accountID)

/* 
Prefer not to use var 
beacuse of issue in block scope and functional
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])