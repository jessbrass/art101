// index.js - Anon Functions and Callbacks
// Author: Jessie Brass
// Date: Nov 5 2023  Revised: Nov 30, 2023
// License: Public Domain

// array
array = [4, 12, 16, 24];
console.log("My array", array);

// named function and result
function multiply(x){
    var result = (x * 2)
    return result;
}

var result = array.map(multiply);
console.log("Use multiplication function on array:", result);

// anon function
var resultDivision = array.map(function(x){
    return x / 2;
})
console.log("Division of array:", resultDivision);

setTimeout(function () {
    // call multiply function after 5000 milliseconds
    var delayedResult = multiply(10);
    console.log("Result after setTimeout", delayedResult);
}, 5000 );



// print out results in the console
// multiply by 2
//console.log("multiply 4 by 2", multiply(4));
//console.log("multiply 12 by 2", multiply(12));
//console.log("multiply 16 by 2", multiply(16));
//console.log("multiply 24 by 2", multiply(24));
//console.log("multiply 28 by 2", multiply(28));

// add 4 
//console.log("add 4 to 4",add4(4));
//console.log("add 4 to 12", add4(12));
//console.log("add 4 to 16", add4(16));
//console.log("add 4 to 24", add4(24));
//console.log("add 4 to 28", add4(28));





