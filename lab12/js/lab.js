/**
 * Author: Jessie Brass
 * Created: 2023
 * Public Domain
 **/

function sortingHat(str) {
  
  len = str.length
  mod = len % 4

  if (mod == 0) {
    return house = "Griffinlore";
  }
  else if (mod == 1) {
  house = "Ravenslaw";
  }
  else if (mod == 2) {
   return house = "Hufflepoofs";
  }
  else {
    return house = "Slithertikes";
  }
}

//$("#button") = document.getElementById("submit");
// button.addEventlistener("click", function (){
  //  var name = document.getElementById("input").value;
   // var house = sortingHat(name);
   // var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  //  document.getElementById("output").innerHTML = newText;
//})

$("#submit").click(function() {
   var name = $("#input").val();
   var house = sortingHat(name);
  $("#output").append("<p id='appendedElement'></br> The Sorting Hat has sorted you into " + house);
})