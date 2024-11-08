let myDate = new Date()
console.log(myDate.toDateString());    //The creation of an object using new Date() is necessary because Date is a built-in JavaScript constructor function designed to create a date object 
console.log(myDate.toString());       // toString is a method In JavaScript, methods are functions attached to objects, and to execute a method, you must include () to "call" it. Without parentheses, JavaScript would simply return a reference to the function itself instead of executing it.
console.log(myDate.toLocaleString());
console.log(typeof myDate);   //object

let myCreatedDate = new Date(23, 0, 2024)
//console.log(myCreatedDate.toLocaleString());

 /*let myTimeStamp = Date.now()  //or u can write new Date()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
*/

//console.log(Date.now()/1000);
//console.log(Math.floor(Date.now()/1000));   //Math. floor() is a JavaScript method that returns the largest integer less than or equal to a given number


let newDate = new Date()   //when u create new object it will be capital because javascript is case sensitive
console.log(newDate);
console.log(newDate.getDay());   //u get only day same for year  and month also

newDate.toLocaleString('default', {    // This tells JavaScript to use the system's default locale, so it formats the date according to your computer's settings (like language and region).
    weekday: "long",            //{ weekday: "long" }: This specifies the options for how the date should be displayed. Here, "weekday": "long" tells JavaScript to show the full name of the day, like "Monday" or "Friday," instead of a short version like "Mon" or "Fri."
})         