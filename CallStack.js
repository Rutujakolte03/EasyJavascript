//The call stack in JavaScript is like a "to-do list" for functions. It helps JavaScript keep track of which function is currently running and which one needs to run next.


function rutz() {
    console.log("Hello!");
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  function main() {
    console.log("Start!");
    rutz(); // Call rutz
    sayBye(); // Call sayBye
    console.log("End!");
  }
  

  //When you call a function, it is added to the top of the stack. When the function is done, it is removed from the stack. 
  
  main();

  