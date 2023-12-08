// Author: Jessie Brass
// Date: 2023
// License: Public Domain


const URL = "https://xkcd.com/info.0.json";
const URLpre = "https://xkcd.com/";
const URLpost = "info.0.json";

// function to replace single + double quotes in HTML
function makeSafe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

// function to get the right XKCD comic number
function getComic(num) {
    // create comic num part of URL
  const numStr = num ? num.toString() + "/" : "";
    // construct complete URL for XKCD API
  const ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);


// ajax request
  $.ajax({
    url: ourURL,
    type: "GET",
  })
  .done(function(data) {
    // process JSON data
    const imageUrl = data.img;
    let title = makeSafe(data.title);
    let alt = makeSafe(data.alt);
    const comicNum = data.num;

    // Build html content for comic
    const html = `<div id="imageblock">
        <h2>${title}</h2>
        <img src="${imageUrl}" title="${alt}"><br>
        <button id="prev">Previous</button><button id="next">Next</button>
      </div>`;

    $("#output").html(html);

    // event listener
    $("#prev").click(function() {
      getComic(comicNum - 1);
    });

    $("#next").click(function() {
      getComic(comicNum + 1);
    });
  })
  .fail(function() {
    console.log("^^ Please ignore this error. It's okay.");
    console.log("Have a okay day! :-)");
  });
}
// get and display last XKCD comic
getComic();


