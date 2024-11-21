////////// Singleton ///////////

/////////// object literals //////

// Object.create

const mySym = Symbol("Key1")

const JsUser = {
    name: "Aditya",
    "full name" : "Aditya Pawar",
    [mySym] : "myKey1",
    age : 18,
    location : "Mumbai",
    email : "ap14@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "aadi14yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "aadi14microsoft.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");   
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);   
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
