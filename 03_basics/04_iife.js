/////// Immediately Invoked Function Expressions   (IIFE)


(function hii() {
    console.log(`DB CONNECTED`);   
})();
 
((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('Aditya') 