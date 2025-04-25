
const accountId = 144553
let accountEmail = "awan@gmail.com"
var accountPassword = "12345"

accountCity = "Lahore"

// accountId = 2    not allowed

accountEmail = "abc@gmail.com"
accountPassword = "1122"
accountCity = "Islamabad"


console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity])


/*  
    not prefer to use var
    because of issue in block scope and functional scope
*/
