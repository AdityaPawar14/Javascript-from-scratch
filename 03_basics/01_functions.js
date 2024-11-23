function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");   
}

// sayMyName()


// function addTwoNumbers(number1,  number2){
//     console.log(number1 + number2);   
// }

function addTwoNumbers(number1,  number2){
    // let result = number1 + number2
    // return result
    return number1+number2  
}

const result = addTwoNumbers(9,2)

// console.log("result: ", result);

function loginUserMessage(username = "Aadi"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage("Aditya"))

function calculateCartPrice(...num1){
        return num1
}

// console.log(calculateCartPrice(200, 500, 2500))


const user = {
    username: "Aditya",  
    price: 288
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Aadi",
    price: 389
})

const myNewArray = [200, 588, 689, 500]

function returnSecondValue(getArray){
        return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 4651, 4684 ,156]));

