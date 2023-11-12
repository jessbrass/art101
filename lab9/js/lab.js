/*
   lab.js - This simple JavaScript/jQuery script 
   uses buttons to modify some elements on the page

   Author: Jessie Brass
   Date: Nov 10 2023
*/

// Add button to sections
$(".output").append("<button id='button-output'>change color!</button>");
$(".Challenge").append("<button id='button-challenge'>change color!!</button>");
$(".Problems").append("<button id='button-problems'>change color!!!</button>");
$(".Results").append("<button id='button-results'>change color!!!!</button>");

// Add a click listener to the challenge button
$("button-output").click(function(){
    $(".output").addClass("selected");
});

// try ChatGPT's code?
$(document).ready(function(){
    $("#button-output").click(function(){
        $("body").css("background-color", " #FFB7C3");
})});

$(document).ready(function(){
    $("#button-challenge").click(function(){
        $("body").css("background-color", " #BCF4DE");
})});

$(document).ready(function(){
    $("#button-problems").click(function(){
        $("body").css("background-color", " #CDE5D7");
})});

$(document).ready(function(){
    $("#button-results").click(function(){
        $("body").css("background-color", " #DED6D1");
})});




