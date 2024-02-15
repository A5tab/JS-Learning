// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE because it has its name
    console.log(`DB CONNECTED`);
})(); 
// To stop first code execution and to invoke other one we use a semi-colon this
// is for when two IIFE's are used

// ()() // IIFE...... first brackets for function definition and second for method call

// To avoid global pollution due to global scope we use IIFE

( () => {
    console.log(`DB CONNECTED TWO`);
} ) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("aftab")