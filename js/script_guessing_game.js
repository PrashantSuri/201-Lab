"use strict";
var questions = ["Do I live in Hyderabad?", "Do I work for Amazon?", "Do I like Seattle?", "Do I like Java language?", "Do I like Pizza?"];
var correct = 0;
var i = 0;
alert("Welcome! Let's play a guessing game so that you can know me better. All Questions have to be answered in Y/N");
for (i=0;i<questions.length;i++) {
    var live = prompt(questions[i]);
    console.log(questions[i] + " = " + live);
    if (live === null) {
        alert("Thanks for visiting");
        break;
    }
    else if (live.toLowerCase() === 'y') {
        alert("Correct");
        correct++;
    }
    else {
        alert("Sorry, incorrect answer");
    }
}
alert("You guessed " + correct + " answers correctly");
