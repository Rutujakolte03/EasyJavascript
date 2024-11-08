const score = 400
console.log(score);  //output-400

const balance = new Number(100)
console.log(balance);     //[Number: 100]

console.log(balance.toString().length);   //3
console.log(balance.toFixed(1));   //output- 100.0

const otherNumber = new Number(123.697)
console.log(otherNumber.toPrecision(3));   //output-124 (Precision after the decimal number the number after 5 are approximately equal to the next number )

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));



//*---------------------------------------Maths-------------------------------------*//

console.log(Math);  //This line logs the entire Math object to the console. The Math object in JavaScript has many built-in functions and constants, like abs (absolute value), round (rounding), ceil (round up), etc.
console.log(Math.abs(-4));    //The Math.abs() function gives the absolute value of a number, meaning it removes any negative sign. Here, -4 becomes 4.
console.log(Math.round(4.6));    //The Math.round() function rounds a number to the nearest whole number. Here, 4.6 rounds up to 5.

console.log(Math.ceil(4.2));         //The Math.ceil() function always rounds a number up to the next whole number, even if it's a decimal. Here, 4.2 becomes 5.
console.log(Math.floor(4.9));          //The Math.floor() function rounds a number down to the nearest whole number. Here, 4.9 is rounded down to 4.
console.log(Math.min(4, 3, 6, 8));      //The Math.min() function finds the smallest number in the list of numbers provided. In this case, the smallest number among 4, 3, 6, and 8 is 3, so it returns 3.
console.log(Math.max(4, 3, 6, 8));      //The Math.max() function finds the largest number in the list of numbers provided. Here, the largest number among 4, 3, 6, and 8 is 8, so it returns 8.
console.log(Math.random);        //        This line logs the Math.random function itself (not its output). Math.random() is a function that generates a random decimal number between 0 and 1 (but never exactly 1). However, just writing Math.random without () will display the function definition instead of generating a random number.
console.log(Math.random()*10 + 1);

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
