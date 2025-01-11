function addToCart (...num1){
    return num1
}
console.log(addToCart(1, 2, 4))


const user = {
    username : "Rutuja",
    price: 300
}

function handleObject(anyObject) {
console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
username: "Rutu",
price: 200
})

const myNewArray = [200, 400, 300, ]