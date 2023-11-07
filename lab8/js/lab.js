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

// defining tests
testing1 ("Test 1: ");
testing2 ("Test 2: ");
testing3 ("Test 3: ");

// callback: words appearing in succession?
setTimeout (function() {
    testing1 ("erm");
}, 2000);
setTimeout (function() {
     testing2 ("hello");
}, 4000);
setTimeout (function() {
    testing3 ("does this work?");
}, 6000);