// Example 1: Simple IIFE
(function () {
    console.log('DB CONNECTED'); // Immediately invoked
})();

// Example 2: IIFE with Parameters
((name) => {
    console.log(`DB CONNECTED: ${name}`); // Template literals with backticks
})('Rutuja');

// Example 3: Another Simple IIFE
(function () {
    let message = 'Hello from IIFE!';
    console.log(message);
})();
