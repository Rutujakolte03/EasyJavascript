//Stack (all primitive datatypes) Heap(all non primitive data types)

let myyoutubename = "RKCreations"
let anothername = myyoutubename

anothername = "RutujaKolte"

console.log(myyoutubename);
console.log(anothername);


let Person = {
    name: "John",
    age: 25
};

let colours = ["red", "blue", "green"];

function sayHello() {
    console.log("Hello!");
}




/*--------------------------------Stack-------------------------------*/
//Think of it like a stack of plates - items are added/removed from the top only
//Fixed amount of memory
//variables are automatically deleted when they are goes out of scoped







/*---------------------------------Heap------------------------------*/

//Think of it like a big storage room where you can put things anywhere
//Cleaned up by garbage collector when no longer referenced
// These are stored in Heap
let person = {
    name: "John",
    age: 25
};

let colors = ["red", "blue", "green"];

function sayHello() {
    console.log("Hello!");
}




/*-------------Example------------------*/
/*
let age = 30;                 // Stored in Stack
let name = "John";           // Stored in Stack

let person = {               // Reference stored in Stack, object stored in Heap
    age: age,
    name: name
};

let numbers = [1, 2, 3];    // Reference stored in Stack, array stored in Heap
*/