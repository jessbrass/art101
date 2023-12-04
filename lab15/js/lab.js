// Author: Jessie Brass
// Created: 2023
// Public Domain

// wrap AJAX code in button function
function fetchData() {
    // ajax
    $.ajax({
        url: "https://yesno.wtf/api",
        method: "GET",
        dataType: "JSON",
    })
    .done(function(response) {
        console.log("done");
        console.log(response);


    // clear output div
    $("#output").empty();

    // append API answer
    $("#output").append(response.answer);

    // append API image
    if (response.image) {
        var imageElement = $("<img>").attr("src", response.image); // Fix the syntax error here
        $("#output").append(imageElement); // Fix the selector here
    }
})
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    });
}

// attach click listener
$("#activate").click(function() {
    console.log("button clicked!");
    fetchData();
});

