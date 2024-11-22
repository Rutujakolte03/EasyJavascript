// Global variables declared in the global area
let a = 300; // Global variable

// Block to demonstrate local variables inside a block scope
if (true) {
    // Local variables declared inside the local area
    let a = 10; // Block-scoped variable
    const b = 20; // Block-scoped constant
    var c = 30; // Function-scoped variable

    console.log("INNER: ", b); // Logs: 20 (local variable inside the block)
}

// Declare and initialize an array to use in the loop
let array = [1, 2, 3, 4, 5]; // Adding this to fix the "ReferenceError: array is not defined"

// Loop to iterate through the array
for (let i = 0; i < array.length; i++) {
    const element = array[i]; // Block-scoped variable for each array element
    console.log(`Element at index ${i}:`, element); // Logs each element with its index
}

// Attempting to access variables outside their block scope
try {
    console.log(b); // This will throw an error because 'b' is block-scoped
} catch (err) {
    console.log("Error accessing 'b':", err.message);
}

try {
    console.log(c); // 'c' is accessible here because it is function-scoped (or global in this case)
} catch (err) {
    console.log("Error accessing 'c':", err.message);
}

// Logging the global variable 'a'
console.log("GLOBAL a:", a); // Logs: 300
