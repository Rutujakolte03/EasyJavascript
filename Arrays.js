const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["rutuja", "shaktiman"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

myArr.push(6)
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(typeof newArr);
console.log(newArr);


//Slice and Splice


/*-------------------------------Slice--------------------------*/   
 //To make a copy of a portion of an array without changing the original array.


/*

let fruits = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits.slice(1, 3); // ["banana", "cherry"]

// fruits array remains the same
let slicedfruits = fruits.slice(0,1,2,3);   //The slice() method only accepts two arguments: the start index and the end index (optional). If you provide more than two arguments, JavaScript will ignore the extra arguments because slice() does not use them.
console.log(slicedFruits);
console.log(slicedfruits);          //output will be only apple

*/



/*------------------------------------Splice----------------------------*/
//To add, remove, or replace elements in an array and it changes the original array.
let fruits = ["apple", "banana", "cherry", "date"];
let splicedfruits = fruits.splice(1, 2, "kiwi", "mango"); // ["banana", "cherry" removed, "kiwi", "mango" added]
console.log(splicedfruits);
// fruits is now ["apple", "kiwi", "mango", "date"]



