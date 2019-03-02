"use strict";
var questions = ["Do I live in Hyderabad?", "Do I work for Amazon?", "Do I like Superhero Movies?", "Do I know French language?", "Do I like Pizza?"];
var answers = ["y", "y", "n", "n", "y"];
var correct = 0;
var i = 0;
alert(answers[2]);
alert("Welcome! Let's play a guessing game so that you can know me better. All Questions have to be answered in Y/N");
for (i=0;i<questions.length;i++) {
    var answer = prompt(questions[i]);
    console.log(questions[i] + " = " + answer);
    if (answer === null) {
        var retry = prompt("It seems you clicked cancel or typed other than Y/N. Type 'Y' if you want to try again");
        if (retry === null || retry.trim().toLowerCase() !== "y") {
            alert("Thanks for visiting");
            break;
        } 
        else {
            i--;
            continue;
        }
    }
    else if (answer.toLowerCase() === answers[i]) {
        alert("Correct");
        correct++;
    }
    else {
        alert("Sorry, incorrect answer");
    }
}
alert("You guessed " + correct + " out of " + questions.length + " answers correctly");
