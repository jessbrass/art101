/**
 // Author:    Jessie 
 * Created:   11.02.2023
 * 
 * Public Domain
 **/
// create a function to sort letters of a username
 function sortUserName () {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
 }

 // output
 document.writeln("Woah look at that, I fixed your name: " ,
    sortUserName(), "</br>");