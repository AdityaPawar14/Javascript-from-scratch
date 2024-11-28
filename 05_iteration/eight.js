const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce( (acc,curval) => acc + curval, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "PS5",
        price: 50000
    },
    {
        itemName: "i-phone",
        price: 20000
    },
    {
        itemName: "TV",
        price: 90000
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )

console.log(priceToPay);
