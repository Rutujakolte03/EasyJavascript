// Object with a method and the `this` keyword
const user = {
    username: "Rutuja",
    price: 999,

    // Method to display a welcome message
    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to JavaScript`);
    }
};

// Calling the method
user.welcomeMessage(); // Output: "Rutuja, Welcome to JavaScript"

// Updating the username property
user.username = "Rutz";

// Calling the method again to reflect the updated value
user.welcomeMessage(); // Output: "Rutz, Welcome to JavaScript"

// `this` in the global scope
console.log(this); // Output: Global object (window in browser, {} in Node.js)

// Regular function and `this`
const maggie = function () {
    let username = "rutuja"; // Local variable
    console.log(this.username); // `this` refers to the global object, so `this.username` is undefined
};
maggie(); // Output: undefined

// Arrow function with implicit return
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(10, 11)); // Output: 21

// Arrow function returning an object
const addObject = (num1, num2) => ({ username: "rutz" });
console.log(addObject(3, 4)); // Output: { username: 'rutz' }

// Array declaration
const myArray = [2, 5, 3, 7, 8];

// Accessing elements by index
console.log(myArray[0]); // Output: 2 (first element)
console.log(myArray[4]); // Output: 8 (last element)

// Common Array Methods
console.log(myArray.length); // Output: 5 (number of elements in the array)

// Adding an element to the end of the array
myArray.push(10);
console.log(myArray); // Output: [2, 5, 3, 7, 8, 10]

// Removing the last element of the array
myArray.pop();
console.log(myArray); // Output: [2, 5, 3, 7, 8]

// Using `map` to create a new array with each element doubled
const doubledArray = myArray.map((num) => num * 2);
console.log(doubledArray); // Output: [4, 10, 6, 14, 16]
