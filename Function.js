//Parameters are like placeholders that you define in a function's declaration to indicate that the function can accept inputs
//Arguments are the actual values you pass to the function's parameters when you call the function
function addTwoNumbers(number1, number2) {
    //console.log(number1 + number2)
    return number1 + number2
}

const result = addTwoNumbers(3,12)
console.log("Result :", result);

function loginUserMessage(username = "Rutz") {        //It has one parameter, username, with a default value of "Rutz". If you don't provide a username, it will automatically use "Rutz".
    if(!username) {                             //If username is not provided or is empty (!username), it prints: "Please enter username" and stops using return.
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`      //If username is provided, it returns a message
}

console.log(loginUserMessage("Rutuja"))