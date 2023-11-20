console.log("Javascript is working");


//input function
$("#da-button").click(function() {
    // console.log("button clicked");
    // var name = prompt ("Gimme ur name bruv:");

    var name = $("#input").val();

    var anagram = generateAnagram(name);

    console.log ("Prompt returned: " + anagram);

    newText = "Hello" + anagram + "!";
    $("#title").html(newText);
});




