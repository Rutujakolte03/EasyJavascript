//Comparison Operators

console.log(2==2); //true
console.log(2>2);  //false
console.log(2<2);   //false
console.log(2>=2);  //true
console.log(2!=2);  //false

console.log("2">=1); //true 
console.log("true">=2);  //value of true=1 ; is the 1 >=2 no so its false

console.log(null>0);
console.log(null==0);
console.log(null<=1);

console.log(undefined>=0);
console.log(undefined <= 0);
console.log(undefined == 0);   //undefined means the variable is declared but the value is not inserted

//strict check it is not only check the values it also checks the datatype

console.log("2"===2);  //false