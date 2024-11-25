const user = {
    username : "Aditya",
    price : 899,


    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website`);
        console.log(this);
                
    }
}

// user.welcomeMessage()
// user.username = "Aaadi"
// user.welcomeMessage()


// console.log(this);


// function bro() {
//      console.log(this.username);

// }

// bro()


// const bro = function () {
//         let username = "Aditya"
//          console.log(this.username);
// }


// const bro =  () => {
//         let username = "Aditya"
//          console.log(this);
// }

// bro()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)//

const addTwo = (num1, num2) => ({username: "aditya"})  


console.log(addTwo(3,5))


// const myArray = [2,5,6,4,8]

// myArray.forEach(() => {})

    