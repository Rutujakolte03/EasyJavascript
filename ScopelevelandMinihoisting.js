if (true) {
    const username = "Rutuja";
    if (username === "Rutuja") { // Use '===' for strict comparison
        const youtube = "RKKCreations";
        console.log(youtube + " " + username); // Add a space for better readability
    }
    console.log(username); // This is fine as 'username' is in scope
}

function addOne(num) { // Function name corrected to camelCase for consistency
    return num + 1;
}
console.log(addOne(5)); // Log the result of the function call, not the function itself

const addTwo = function (num) {
    return num + 2;
};
console.log(addTwo(7)); // Same as above
