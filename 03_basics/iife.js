// Immediately Invoked Function Expressions (IIFE)


(function chiya(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("David")