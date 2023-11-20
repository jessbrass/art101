// lab.js - this simple javascript/jquery script gets a value from an input 
// field and outputs a modified version
// author: Jessie Brass
// date: 2023

// sorts the characters of a string in alphabetical order

function sortString(inputString) {
    // have to convert string to an array and back again to sort it
    return inputString.split("").sort().join("");
}

// click listener
$("#submit").click(function() {
    // get value of input field
    const username = $("#user-name").val();
    // sort it
    usernameSorted = sortString(username);
    // append new div to output div
    $("#output").html('<div class="text"><p>' + usernameSorted + '</p></div>');
});



