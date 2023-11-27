function runFIZZBUZZ() {
    for (var index = 1; index <= 200; index++) {
        var str = "";
        if (index % 3 === 0) {
            str += "Fizz";
        }
        if (index % 5 == 0) {
        str += "Buzz";
        }
        if (index % 7 == 0) {
            str += "Kapow!";
        }
        if (str === "") {
            str = index.toString();
        }
// append result to output
    document.getElementById("output").innerHTML += str + "<br>";
        }
}
