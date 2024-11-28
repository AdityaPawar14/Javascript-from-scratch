// const coding = ["js", "ruby" ,"java", "python", "cpp"] 


// const values = coding.forEach ( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 3
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 3) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    { titile : 'Book1' , genre: 'Fiction', publish: 1995,
    edition: 2022},
    { titile : 'Book2' , genre: 'Non-Fiction', publish: 2000,
    edition: 2005},
    { titile : 'Book3' , genre: 'Fiction', publish: 1975,
    edition: 1985},
    { titile : 'Book4' , genre: 'History', publish: 2002,
    edition: 2008},
    { titile : 'Book5' , genre: 'Fiction', publish: 1995,
    edition: 1998},
    { titile : 'Book6' , genre: 'History', publish: 1995,
    edition: 2000},
    { titile : 'Book7' , genre: 'Non-Fiction', publish: 2012,
    edition: 2016}, 
];
 
let userBooks = books.filter( (bk) => bk.genre === 'History' ); 

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
} );
 
console.log(userBooks);
