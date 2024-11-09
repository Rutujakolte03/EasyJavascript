//singleton object

//create.object (constructor method(object creation))

//object literals

const mySym = Symbol(" key1")

const JsUser = {
    name: "Rutuja",
    mySym: "key1",
    email_id: "rutujakolte193@gmail.com",
    age: 22,
    location: "Pune",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]

}

console.log(JsUser.email_id)
console.log(JsUser["email_id"])

console.log(JsUser.age)
console.log(JsUser["mySym"])
console.log(JsUser[mySym])
//there is another datatype Symbol interviewr's ask add symbols to keys and print it


 JsUser.email_id = "rutujakolte193@gmail.com"
 //Object.freeze(JsUser)
 JsUser.email_id = "rutujakolte193@gmail.com"
 console.log(JsUser["email_id"]);

 JsUser.greeting = function(){
    console.log("Hello Js user");
 }

 console.log(JsUser.greeting());
 JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
 }

 console.log(JsUser.greetingTwo());