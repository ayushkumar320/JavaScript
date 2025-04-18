// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IFFE
    console.log(`DB Connected`);
})(); // here ; is important to end the function

((name) => { 
    // unnamed IFFE
    console.log(`DB Connected two ${name}`)
})('hitesh');