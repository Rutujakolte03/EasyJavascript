const fruits = ["apple, banana, grapes, papaya, pineapple"]
const fruit = ["Guava, CustardApple"]

//fruits.push(fruit)
//console.log(fruits);

const allFruits = fruits.concat(fruit)
console.log(allFruits);          //concat merge all existing vlaue 

const all_new_heros = [...fruits, ...fruit]
console.log(all_new_heros);  


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Rutuja"))
console.log(Array.from("Rutuja"))

let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1, score2, score3));