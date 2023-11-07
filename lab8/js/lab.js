// index.js - Anon Functions and Callbacks
// Author: Jessie
// Date: Nov 5 2023
// License: Public Domain

// VARIABLES
var myArray = [5, 10, 15, 20, 25, 30];

// FUNCTIONS 
function add5(x){
    var results = (x + 5)
    return results;
}

// Wes's code
function numberone(test) {
    console.log(test + "UNO");
}

function numbertwo(test) {
    console.log(test + "DOS");
}

function numberthree(test) {
    console.log(test + "TRES");
    }

numberone("Test 1: ");
numbertwo("Test 2: ");
numberthree("Test 3: ");

// callback
setTimeout (function() {
    appear ("erm");
}, 2000);
setTimeout (function() {
    appear ("hello");
}, 4000);
xsetTimeout (function() {
    appear ("does this work?");
}, 6000);