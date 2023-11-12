/*
   lab.js - This simple JavaScript/jQuery script 
   uses buttons to modify some elements on the page

   Author: Jessie Brass
   Date: Nov 10 2023
*/

// (For fun I guess) Add color change button to sections
$("#output").append("<button id='button-output'>change BG color!!!!</button>");
$("#problems").append("<button id='button-problems'>change BG color!!</button>");
$("#results").append("<button id='button-results'>change BG color!!!</button>");

// Add toggle class button to challenge
$("#challenge").append("<button id='lab-toggle-button'>plz plz plz click!<button>");

// Add a click listener to the toggle Class button
$("#lab-toggle-button").click(function(){
    $("#challenge").toggleClass(".special");
    //Teia's line of code:
    $("#challenge").html("you clicked it!")
});

// try ChatGPT's code? (for fun I guess)
$(document).ready(function(){
    $("#button-output").click(function(){
        $("body").css("background-color", " #ec8d9d");
})});

$(document).ready(function(){
    $("#button-problems").click(function(){
        $("body").css("background-color", " #82d1a4");
})});

$(document).ready(function(){
    $("#button-results").click(function(){
        $("body").css("background-color", " #f2c0a2");
})});




