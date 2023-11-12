/*
   lab.js - This simple JavaScript/jQuery script 
   uses buttons to modify some elements on the page

   Author: Jessie Brass
   Date: Nov 10 2023
*/

// Add button to sections
$(".output").append("<button id='button-output'>change BG color!!!!</button>");
$(".challenge").append("<button id='button-challenge'>change BG color!</button>");
$(".problems").append("<button id='button-problems'>change BG color!!</button>");
$(".results").append("<button id='button-results'>change BG color!!!</button>");

// Add toggle class button
$(".challenge").append("<button id='lab-toggle-button'>special button<button>");

// Add a click listener to the toggle Class button
$("#lab-toggle-button").click(function(){
    $(".challenge").toggleClass(".special");
});

// try ChatGPT's code?
$(document).ready(function(){
    $("#button-output").click(function(){
        $("body").css("background-color", " #ec8d9d");
})});

$(document).ready(function(){
    $("#button-challenge").click(function(){
        $("body").css("background-color", " #57edb1");
})});

$(document).ready(function(){
    $("#button-problems").click(function(){
        $("body").css("background-color", " #82d1a4");
})});

$(document).ready(function(){
    $("#button-results").click(function(){
        $("body").css("background-color", " #f2c0a2");
})});




