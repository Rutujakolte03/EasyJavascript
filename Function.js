//Parameters are like placeholders that you define in a function's declaration to indicate that the function can accept inputs
//Arguments are the actual values you pass to the function's parameters when you call the function
function addTwoNumbers(number1, number2) {
    //console.log(number1 + number2)
    return number1 + number2
}

const result = addTwoNumbers(3,12)
console.log("Result :", result);

function loginUserMessage(username = "Rutz") {
    if(!username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rutuja"))