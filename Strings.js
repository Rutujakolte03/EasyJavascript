let name = "rutuja"
let repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('rutuja')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const url = "https://rutuja.com/rutuja%20kolte"

console.log(url.replace('%20','-'))
console.log(url.includes('Dr'))

console.log(gameName.split('-'));