// lab.js -this JS/JQuery

var message = "Hello!* Welcome the Mystery Spot.* How are you all doing today?*  Good!* good to know you're all going good,* I am doing good as well thank you for asking.* My name is Jessie and I will be your tour guide today.* Has anyone here visited our mysterious neck of the woods before?* (Someone answers: 20 years ago!)* Well I’ve got some good news for you,* nothing’s changed!* The mystery is still mysterious* and the jokes are still corny,* so you’re in for quite a wild ride.* Now I’m gonna give you a little history behind the mystery,* but if all this talking starts to bore you feel free to read the sign behind you.* I’ve never read it myself but I’m sure it’s super interesting.* So, back in the day, before this was a tourist attraction, a lumber company owned this piece of land.* Then, in 1939 a man named George Prather wanted to build his wife a summer home,* so he asked the lumber company if he could buy some of their land off of them.* The lumber company sold him the land for a great deal, conveniently forgetting to tell him that the hillside would be completely impossible to build any sound structure on top of.* Luckily, before Mr. Prather begin building, he hired a team to survey the land,* and when the team surveyed the hillside, they discovered strange irregularities about the land.* The first thing they noticed was that it was abnormally difficult to walk up this hill over here,* which I'm sure you're all super excited for.* The second thing they noticed was that their compasses were going haywire,* north becoming south and east becoming west, and just spinning around like crazy.* Because of these anomalies, the surveyors told Mr. Prather that anything he would build on the hill would cause quite a landslide.* Mr. Prather asked them how far the anomalies spanned and the surveyors told him it’s a circle about 150 feet in diameter and the border runs through these two cement blocks.* So if you’re standing on this side you may have begun to feel mysterious (waves fingers),* and those of you on this side probably feel a bit ripped off,* but don’t worry! Soon we will all experience these mysterious forces.* ";
let sentences = message.split("*");
console.log(sentences);

var counter= 0;

function generateRandomText() {
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
  }

  // click listener for button
$("#make-convo").click(function(){
    $("#output").append('<div class="text"><p>' + sentences[counter] + '</p></div>');
    counter ++ ;

});







