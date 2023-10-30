// index.js - Arrays and Objects Lab
// Author: Jessie
// Date: 10/27/23

// define variables
var myTransport = ["Mercedez", "my boyfriend's Vespa", "bus"]

// Object for my main ride
 myMainRide = {
  make: "Mercedez Benz",
  model: "C300",
  color: "light blue",
  year: 2010,
  age: function() {
    return 2023 - this.year;
  }
}
  // output
document.writeln("Kinds of transportation I use: " + myTransport + "<br>")
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");